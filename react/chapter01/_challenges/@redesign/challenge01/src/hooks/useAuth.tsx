import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

interface IAuth {
  signed: boolean;
  name: string;
}

interface AuthContextData {
  auth: IAuth;
  signIn(_name: string): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState<IAuth>(() => {
    const storedSigned = localStorage.getItem('@WeNotes:auth');

    if (storedSigned) {
      return JSON.parse(storedSigned);
    }

    return false;
  });

  const signIn = useCallback((name: string) => {
    localStorage.setItem(
      '@WeNotes:auth',
      JSON.stringify({ name, signed: true }),
    );

    setAuth(previousState => ({
      ...previousState,
      signed: true,
      user: { name },
    }));
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@WeNotes:auth');

    setAuth({} as IAuth);
  }, []);

  const value = useMemo(() => ({ auth, signIn, signOut }), [
    auth,
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
