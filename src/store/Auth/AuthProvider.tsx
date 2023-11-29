/**
 * The AuthProvider Component.
 * @param props The Component props
 * @returns React.JSX.Element
 *
 */

import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import AuthContext, {
  AuthCtx,
  AuthStatus,
  context,
  defaultAuthState,
} from "./AuthContext";
import User from "@/lib/models/Entities/Users";

/*prettier-ignore*/
const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [session, setSession] = useState<AuthCtx['session']>(null);
  const [status, setStatus] = useState<AuthStatus>(session ? AuthStatus.AUTHENTICATED : context.status);
  const user = useMemo(()=> session?.user ? new User(session.user) : null, [session])

  console.log("session", session);

  const loginHanlder: AuthCtx["logIn"] = async (loginData) => {
    try {
      const { logIn } = await import("@/lib/services/auth");
      const res = await logIn(loginData);


      setStatus(AuthStatus.AUTHENTICATED);

      setSession(res);
    
    } catch (err) {
      setStatus(AuthStatus.UNAUTHENTICATED);
      throw err;
    }
  };

  const logoutHandler = useCallback(async () => {
    setSession(null)
    setStatus(AuthStatus.UNAUTHENTICATED)

    const {logOut} = await import ('@/lib/services/auth')
    await logOut()
  },[])

  const gestSessionHandler: AuthCtx['getSession'] = useCallback(async () => {
    try {
      const { getSession } = await import("@/lib/services/auth");      
      const res = await getSession();


      setStatus(AuthStatus.AUTHENTICATED);
      setSession(res);

      console.log(res)

    } catch (error) {
      logoutHandler()
    }
  }, [logoutHandler])

  const refreshSessionHandler: AuthCtx['refreshSession'] = async () => {
    try {
      const { refreshSession} = await import("@/lib/services/auth");      
      const res = await refreshSession();
      setStatus(AuthStatus.AUTHENTICATED);
      setSession(res);

    } catch (err) {
      logoutHandler()
    }
  };

  useEffect(() => {
    gestSessionHandler();
  }, [gestSessionHandler]);

  const authCtx: AuthCtx = {
    isLoggedin: status===AuthStatus.AUTHENTICATED,
    status,
    session,
    user,
    logIn: loginHanlder,
    logOut: logoutHandler,
    getSession: gestSessionHandler,
    refreshSession: refreshSessionHandler,
  };

  return (
    <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
