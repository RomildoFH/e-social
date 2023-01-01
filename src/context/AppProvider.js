import React, { useMemo, useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  const values = useMemo(() => ({
    isLoading,
    setIsLoading,
  }), [isLoading])

  return (
    <AppContext.Provider value={ values }>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;
