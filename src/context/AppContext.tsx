import React, { createContext, useContext, useState } from 'react';

const lightColors = {
  background: '#F3F4F6', surface: '#FFFFFF', text: '#111827',
  primary: '#4F46E5', onPrimary: '#FFFFFF', muted: '#6B7280', border: '#E5E7EB'
};

const darkColors = {
  background: '#111827', surface: '#1F2937', text: '#F9FAFB',
  primary: '#818CF8', onPrimary: '#FFFFFF', muted: '#9CA3AF', border: '#374151'
};

const AppContext = createContext<any>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(false);
  const [userName, setUserName] = useState('Student');

  const toggleTheme = () => setIsDark((prev) => !prev);
  const colors = isDark ? darkColors : lightColors;

  return (
    <AppContext.Provider value={{ isDark, toggleTheme, colors, userName, setUserName }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);