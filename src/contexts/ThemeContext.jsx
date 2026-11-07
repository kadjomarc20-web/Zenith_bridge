// src/contexts/ThemeContext.jsx
import { useState, useEffect } from 'react';
import { ThemeContext } from './theme-context.js';

// localStorage peut être bloqué (navigation privée) : on protège lecture et écriture.
function readTheme() {
  try { return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'; } catch { return 'light'; }
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try { localStorage.setItem('theme', theme); } catch { /* ignoré */ }
  }, [theme]);

  const handleThemeSwitch = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ theme, handleThemeSwitch }}>
      {children}
    </ThemeContext.Provider>
  );
}
