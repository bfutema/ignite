import React, { createContext, useCallback, useContext, useMemo } from 'react';

interface AuthContextData {
  signed: boolean;
  signIn(_name: string): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback((name: string) => {
    console.log('signIn: ', name);
  }, []);

  const signOut = useCallback(() => {
    console.log('signOut');
  }, []);

  const value = useMemo(() => ({ signed: true, signIn, signOut }), [
    signIn,
    signOut,
  ]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(`useAuth must be used within an AuthProvider`);
  }

  return context;
}

export { AuthProvider, useAuth };
