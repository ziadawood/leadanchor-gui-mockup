import React, { createContext, useContext, useState, useEffect } from 'react';
import { businessProfile } from '../data/mock';

const ThemeContext = createContext();

export const THEMES = {
  STARTER: 'starter',
  PRO: 'pro',
};

export function ThemeProvider({ children }) {
  // Read from mock.js by default
  const [theme, setTheme] = useState(businessProfile.plan === 'starter' ? THEMES.STARTER : THEMES.PRO);
  
  // Set data-theme on document element for easier global styling
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div data-theme={theme} className="theme-root">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
