import { createContext } from "react";

interface AuthContextType {
   user: string;
   password: string;   
   signin: (user: string, password: string) => Promise<boolean>;
   signout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);