import { Link } from 'react-router-dom';
import { appNav } from '../data/AppNav.js';
import SocialLinks from './social/SocialLink.jsx'; // Import par défaut si export default

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-400 dark:bg-gray-900 text-white p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-items-center">
      
      {/* 1. Droits d'auteur */}
      <p className="text-sm text-blue-100/80 dark:text-gray-400">
        &copy; {currentYear} Tous droits réservés.
      </p>

      {/* 2. Navigation du Footer */}
      <nav>
        <ul className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
          {appNav.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="inline-block hover:text-blue-400 hover:scale-110 transform transition-all duration-300 ease-in-out"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* 3. Liens Réseaux Sociaux */}
      <SocialLinks />

    </footer>
  );
}