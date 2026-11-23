"""Convertit les contours Natural Earth (domaine public) en tracés SVG projetés.
Usage : python -I build_geo.py <ne_50m_admin_0_countries.geojson> <sortie.js>
Projection équirectangulaire : x = (lon - LON0) * K ; y = (LAT0 - lat) * K
"""
import json, sys, math

LON0, LAT0, K = -20.0, 58.0, 4.6
PAYS = {  # code ISO → (clé, tolérance de simplification en degrés, précision)
    'CHN': ('chine', 0.18, 1),
    'CIV': ('coteIvoire', 0.03, 2),
    'GHA': ('ghana', 0.03, 2),
    'BFA': ('burkina', 0.03, 2),
    'MLI': ('mali', 0.04, 2),
    'GIN': ('guinee', 0.03, 2),
    'LBR': ('liberia', 0.03, 2),
}

def proj(lon, lat):
    return ((lon - LON0) * K, (LAT0 - lat) * K)

def dp(pts, tol):
    """Simplification Douglas-Peucker."""
    if len(pts) < 3:
        return pts
    (x1, y1), (x2, y2) = pts[0], pts[-1]
    dx, dy = x2 - x1, y2 - y1
    norm = math.hypot(dx, dy) or 1e-12
    best, idx = -1, 0
    for i in range(1, len(pts) - 1):
        x0, y0 = pts[i]
        d = abs(dy * x0 - dx * y0 + x2 * y1 - y2 * x1) / norm if (dx or dy) else math.hypot(x0 - x1, y0 - y1)
        if d > best:
            best, idx = d, i
    if best <= tol:
        return [pts[0], pts[-1]]
    return dp(pts[: idx + 1], tol)[:-1] + dp(pts[idx:], tol)

def area(ring):
    return abs(sum(ring[i][0] * ring[i - 1][1] - ring[i - 1][0] * ring[i][1] for i in range(len(ring)))) / 2

def to_path(geom, tol, prec):
    polys = geom['coordinates'] if geom['type'] == 'MultiPolygon' else [geom['coordinates']]
    rings = [p[0] for p in polys]  # contour extérieur uniquement
    biggest = max(area(r) for r in rings)
    out = []
    for r in rings:
        if area(r) < biggest * 0.02:  # on ignore les petites îles
            continue
        s = dp(r, tol)
        if len(s) < 4:
            continue
        pts = [proj(lon, lat) for lon, lat in s[:-1]]
        out.append('M' + 'L'.join(f'{x:.{prec}f},{y:.{prec}f}' for x, y in pts) + 'Z')
    return ''.join(out)

def main():
    data = json.load(open(sys.argv[1], encoding='utf-8'))
    found = {}
    for f in data['features']:
        code = f['properties'].get('ADM0_A3')
        if code in PAYS:
            key, tol, prec = PAYS[code]
            found[key] = to_path(f['geometry'], tol, prec)
    missing = [v[0] for v in PAYS.values() if v[0] not in found]
    if missing:
        sys.exit('Pays introuvables : ' + ', '.join(missing))
    lines = [
        '// src/data/carteGeo.js — FICHIER GÉNÉRÉ, ne pas modifier à la main.',
        '// Contours simplifiés issus de Natural Earth (naturalearthdata.com, domaine public).',
        f'// Projection équirectangulaire : x = (lon - ({LON0})) * {K} ; y = ({LAT0} - lat) * {K}',
        f'export const PROJECTION = {{ lon0: {LON0}, lat0: {LAT0}, k: {K} }};',
        '',
        'export const CONTOURS = {',
    ]
    for key in [v[0] for v in PAYS.values()]:
        lines.append(f"  {key}: '{found[key]}',")
    lines.append('};')
    open(sys.argv[2], 'w', encoding='utf-8').write('\n'.join(lines) + '\n')
    for k, v in found.items():
        print(f'{k}: {len(v)} caractères')

main()
