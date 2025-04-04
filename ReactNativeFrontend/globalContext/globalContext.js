// globalContext.js
import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

const Provider = ({ children }) => {

  const [domain, setDomain ] = useState("http://localhost:8000/")  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const globalContext = {
    domain,
    isLoggedIn,
    setIsLoggedIn,
  };

  return <Context.Provider value={globalContext}>{children}</Context.Provider>;
};

export { Context, Provider };
