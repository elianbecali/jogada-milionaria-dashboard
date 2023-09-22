import React, { createContext, useContext } from "react";
import { useSessionStorage } from 'react-use-storage'

type User = {
  email: string;
}

type AuthContextProps = {
  user: User | null;
  isAuthenticaded: boolean;
  updateUser: (data: User) => void;
}

type AuthProviderProps = {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useSessionStorage<User | null>('user', null)

  function handleSetUser(data: User) {
    setUser(data) 
  }

  return (
    <AuthContext.Provider value={{  user, isAuthenticaded: !!user?.email, updateUser: handleSetUser}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}