import React, { useState, createContext, useContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

// Criando context
const AuthContext = createContext({});

// Criando provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Criando hook, consumindo o context e passando as funções necessárias
export function useAuth() {
  const context = useContext(AuthContext);
  const { user, setUser } = context;

  useEffect(() => {
    const updateUser = async () => {
      onAuthStateChanged(auth, (authenticatedUser) => {
        if (authenticatedUser) {
          setUser(authenticatedUser);
        } else {
          setUser(null);
        }
      });
    };
    updateUser();

    return () => updateUser();
  }, [setUser]);

  return { user, setUser };
}
