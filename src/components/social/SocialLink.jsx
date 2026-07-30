export default function SocialLinks() {
  const socialMedias = [
    { name: 'Twitter', icon: 'image/social/tw.svg', url: 'https://twitter.com', translateY: 'hover:-translate-y-2' },
    { name: 'Instagram', icon: 'image/social/ig.svg', url: 'https://instagram.com', translateY: 'hover:translate-y-2' },
    { name: 'LinkedIn', icon: 'image/social/ln.svg', url: 'https://linkedin.com', translateY: 'hover:-translate-y-2' },
    { name: 'Facebook', icon: 'image/social/fb.svg', url: 'https://facebook.com', translateY: 'hover:translate-y-2' },
    { name: 'YouTube', icon: 'image/social/yb.svg', url: 'https://youtube.com', translateY: 'hover:-translate-y-2' },
  ];

  return (
    <div className="flex gap-3 justify-center items-center">
      {socialMedias.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className={`group opacity-80 hover:opacity-100 ${social.translateY} transform transition-all duration-300 ease-in-out`}
        >
          {/* L'élément prend la couleur du parent grâce au masque CSS */}
          <span
            className="block w-6 h-6 bg-white group-hover:bg-blue-400 transition-colors duration-300"
            style={{
              maskImage: `url(${social.icon})`,
              WebkitMaskImage: `url(${social.icon})`,
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          />
        </a>
      ))}
    </div>
  );
}