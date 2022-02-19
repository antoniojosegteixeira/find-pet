import React, { useState, createContext, useContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

/// CONTEXT API
const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthProvider.Provider value={{ user, setUser }}>
      {children}
    </AuthProvider.Provider>
  );
};

export const useAuth = () => {
  const { user, setUser } = useContext(authContext);

  useEffect(() => {
    const isLogged = onAuthStateChanged(auth, async (authenticatedUser) => {
      authenticatedUser ? setUser(authenticatedUser) : setUser(null);
    });

    return () => isLogged();
  }, [user, setUser]);

  return { user };
};
