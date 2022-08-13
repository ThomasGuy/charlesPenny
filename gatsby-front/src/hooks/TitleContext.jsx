import React, { createContext, useMemo, useState, useContext } from 'react';

const defaultValue = {};
const TitleContext = createContext(defaultValue);

const TitleContextProvider = ({ children }) => {
  const [title, setPageTitle] = useState('Wednesday Isolationists');
  const value = useMemo(
    () => ({
      title,
      setPageTitle,
    }),
    [title],
  );

  return <TitleContext.Provider value={value}>{children}</TitleContext.Provider>;
};

function useTitleContext() {
  const context = useContext(TitleContext);
  if (context === defaultValue) {
    throw new Error('useTitleContext must be used within TitleContextProvider');
  }
  return context;
}

export { useTitleContext, TitleContextProvider };
