// src/components/Navbar.jsx
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Plane } from 'lucide-react'
import { Utensils, Sun, Moon } from "lucide-react";
import { ThemeContext } from '../contexts/ThemeContext';
import { appNav } from '../data/AppNav.js';

export default function Navbar() {
  const { theme, handleThemeSwitch } = useContext(ThemeContext);
  // État pour gérer le menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-blue-400 dark:bg-gray-900 p-4 sticky top-0 z-50">
      <nav className="flex justify-between items-center text-white max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Plane className="text-blue-500" size={32} />
          <div className="flex flex-col items-center">
  <h1 className="text-lg font-bold tracking-tight text-white">Zenith Bridge</h1>
  
  {/* Ligne horizontale avec "Global" au centre */}
  <div className="flex items-center gap-2 w-full mt-1">
    {/* Trait gauche */}
    <div className="flex-1 h-0.5 bg-blue-500 rounded-full"></div>

    {/* Texte */}
    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500 shrink-0">
      Global
    </span>

    {/* Trait droit */}
    <div className="flex-1 h-0.5 bg-blue-500 rounded-full"></div>
  </div>
</div>

           <div className='flex flex-col justify-end'>
        {/* Switch Dark Mode */}
          <button
            onClick={handleThemeSwitch}
            className="hover:text-blue-500 hover:scale-110 cursor-pointer transform transition-all duration-300 ease-in-out p-1"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
      </div>
        </div>

        {/* Actions (Hamburger + DarkMode) */}
        <div className="flex items-center gap-4">
          {/* Bouton Hamburger */}
          <button
            id="hamburger-button"
            type="button"
            onClick={toggleMenu}
            className={`relative h-8 w-8 cursor-pointer text-2xl sm:hidden ${isMenuOpen ? 'toggle-btn' : ''}`}
            aria-label="Toggle mobile menu"
          >
            <div className="absolute top-4 -mt-0.5 h-0.5 w-8 rounded bg-white transition-all duration-500 
              before:absolute before:h-0.5 before:w-8 before:-translate-x-4 before:-translate-y-3 
              before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] 
              after:absolute after:h-0.5 after:w-8 after:-translate-x-4 after:translate-y-3 
              after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']" 
            />
          </button>

          {/* Navigation Desktop */}
          <ul className="hidden sm:flex space-x-4 list-none items-center">
            {appNav.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="hover:text-blue-500 hover:scale-110 transform transition-all duration-300 ease-in-out block"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          
        </div>
      </nav>

      {/* Menu Mobile déroulant */}
      {isMenuOpen && (
        <section
          id="mobile-menu"
          onClick={toggleMenu}
          className="absolute top-full left-0 min-h-screen w-full bg-blue-300 dark:bg-gray-800 text-white flex flex-col justify-center items-center py-6 sm:hidden animate-open-menu shadow-lg"
        >
          <nav className="flex flex-col items-center gap-6 text-lg font-semibold">
            {appNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-red-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </section>
      )}
     
    </header>
  );
}