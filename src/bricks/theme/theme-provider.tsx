import type React from 'react';
import { createContext, useEffect, useState } from 'react';
import './theme.css';

type Themes = 'light' | 'dark';
const THEME_KEY = 'SELECTED_THEME';

interface ThemeContextType {
  theme: Themes;
  toggleTheme(): void;
}

const getStoredTheme = () => (localStorage.getItem(THEME_KEY) as Themes) || 'light';
const setStoredTheme = (theme: Themes) => localStorage.setItem(THEME_KEY, theme);

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Themes>(getStoredTheme());

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    setStoredTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
