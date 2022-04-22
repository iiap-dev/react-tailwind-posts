import React from 'react';
import { AppContext } from '../@types/app';
import { useAppContextValue } from '../hooks/useAppContextValue';

// TODO remove any
const AppProvider: React.FC<any> = ({ children }) => {
  const appContextValue = useAppContextValue();

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
