import React, { createContext, useContext, useState } from 'react';

// Buat Context
const NavigationContext = createContext();

// Buat Provider
const NavigationProvider = ({ children }) => {
  const [activeNavId, setActiveNavId] = useState(null);

  const setActiveNav = (navId) => {
    setActiveNavId(navId);
  };

  return (
    <NavigationContext.Provider value={{ activeNavId, setActiveNav }}>
      {children}
    </NavigationContext.Provider>
  );
};

// Buat Custom Hook untuk Menggunakan Context
const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

export { NavigationProvider, useNavigation };
