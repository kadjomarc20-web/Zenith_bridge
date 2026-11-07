// Contexte séparé du Provider : requis par le Fast Refresh de Vite.
import { createContext } from 'react';

export const ThemeContext = createContext({ theme: 'light', handleThemeSwitch: () => {} });
