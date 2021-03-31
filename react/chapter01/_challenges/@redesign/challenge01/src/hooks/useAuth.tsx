import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

interface IUser {
  name: string;
}

interface AuthContextData {
  auth: {
    signed: boolean;
    user: IUser | undefined;
  };
  signIn(_name: string): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [signed, setSigned] = useState<boolean>(() => {
    const storedSigned = localStorage.getItem('@WeNotes:signed');

    if (storedSigned) return JSON.parse(storedSigned);

    return false;
  });

  const [user, setUser] = useState<IUser>(() => {
    const storedUser = localStorage.getItem('@WeNotes:user');

    if (storedUser) return JSON.parse(storedUser);

    return {} as IUser;
  });

  const signIn = useCallback((name: string) => {
    localStorage.setItem(
      '@WeNotes:auth',
      JSON.stringify({ name, signed: true }),
    );

    setUser({ name });
    setSigned(true);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@WeNotes:auth');

    setUser({} as IUser);
    setSigned(false);
  }, []);

  const value = useMemo(() => ({ auth: { signed, user }, signIn, signOut }), [
    user,
    signed,
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
