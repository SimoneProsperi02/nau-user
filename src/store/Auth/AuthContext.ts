import User from "@/lib/models/Entities/Users";
import { createContext } from "react";

export enum AuthStatus {
  AUTHENTICATED = "autheticaded",
  LOADING = "loading",
  UNAUTHENTICATED = "unautheticaded",
}

interface AuthState {
  isLoggedin: boolean;
  status: AuthStatus;
  session: AuthApi.AuthSession | null;
  user: User | null;
}

export interface AuthCtx extends AuthState {
  logIn: (loginData: AuthApi.AuthData) => void | Promise<void>;
  logOut: () => void;
  getSession: () => void;
  refreshSession: () => void;
}

export const defaultAuthState: AuthState = {
  isLoggedin: false,
  status: AuthStatus.LOADING,
  session: null,
  user: null,
};
export const context: AuthCtx = {
  ...defaultAuthState,
  logIn: () => {},
  logOut: () => {},
  getSession: () => {},
  refreshSession: () => {},
};
export const AuthContext = createContext(context);
AuthContext.displayName = "AuthContext";

export default AuthContext;
