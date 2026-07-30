import { Route } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import ContactPage from './pages/Contact.jsx';
import ProduitPage from './pages/Produit.jsx';
import ServicePage from './pages/Service.jsx';
import ProduitDetailPage from './pages/ProduitDetail.jsx';

export const appRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/service', element: <ServicePage /> },
  { path: '/produit', element: <ProduitPage /> },
  { path: '/produit/:categorie', element: <ProduitPage /> },
  { path: '/produit/:categorie/:souscategorie', element: <ProduitPage /> },
  { path: '/produit/:categorie/:souscategorie/detail/:id', element: <ProduitDetailPage /> },
];

export function renderRoutes() {
  return appRoutes.map(({ path, element }) => (
    <Route key={path} path={path} element={element} />
  ));
}
