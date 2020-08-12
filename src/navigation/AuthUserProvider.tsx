import React, { useState, createContext, ReactNode } from "react";

export const AuthUserContext = createContext({});

interface props {
  children: ReactNode;
}

export const AuthUserProvider = ({ children }: props) => {
  const [user, setUser] = useState(null);

  return (
    <AuthUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthUserContext.Provider>
  );
};
