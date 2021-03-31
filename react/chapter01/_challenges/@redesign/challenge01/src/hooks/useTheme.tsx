import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { ThemeProvider } from 'styled-components';

import * as themes from '../styles/themes';

export type ThemeState = 'light' | 'dark';

interface ThemeContextData {
  currentTheme: ThemeState;
  toggleTheme(): void;
}

const AppThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const AppThemeProvider: React.FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeState>(() => {
    const storedTheme = localStorage.getItem('@WeNotes:theme') as ThemeState;

    return storedTheme ? JSON.parse(storedTheme) : 'light';
  });

  const toggleTheme = useCallback(() => {
    setCurrentTheme(previousTheme => {
      const newTheme = previousTheme === 'light' ? 'dark' : 'light';

      localStorage.setItem('@WeNotes:theme', JSON.stringify(newTheme));

      return newTheme;
    });
  }, []);

  const value = useMemo(() => ({ currentTheme, toggleTheme }), [
    currentTheme,
    toggleTheme,
  ]);

  return (
    <AppThemeContext.Provider value={value}>
      <ThemeProvider theme={themes[currentTheme]}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
};

function useAppTheme(): ThemeContextData {
  const context = useContext(AppThemeContext);

  if (!context) {
    throw new Error(`useAppTheme must be used within an AppThemeProvider`);
  }

  return context;
}

export { AppThemeProvider, useAppTheme };
