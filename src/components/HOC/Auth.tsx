import { AuthStatus } from "@/store/Auth/AuthContext";
import { useAuth } from "@/store/Auth/AuthProvider";

import { useRouter } from "next/router";
import { useCallback } from "react";
import SpinLoader from "../UI/Icons/Loaders/SpinLoader";
import PageContainer from "../Container/Container";

type AuthProps = { auth: AugmentedNextPage["auth"] };

const Auth: React.FC<React.PropsWithChildren<AuthProps>> = ({
  auth,
  children,
}) => {
  const { user, status, isLoggedin } = useAuth();
  const authProps = typeof auth === "object" ? auth : false;
  const router = useRouter();
  const unauthorizedUrl = authProps && (authProps.unauthorized || false);

  const onUnauthenticated = useCallback(() => {
    router.replace(unauthorizedUrl || "/login");
  }, [unauthorizedUrl, router]);

  let canAccess = isLoggedin;
  if (authProps && user && authProps?.role) {
    canAccess = user.can(authProps.role);
  }

  if (status === AuthStatus.LOADING) {
    return (
      <>
        {authProps && authProps.content}
        {authProps ? (
          <>{authProps.loading}</>
        ) : (
          <PageContainer>
            <SpinLoader className="w-5 h-5"></SpinLoader>
          </PageContainer>
        )}
      </>
    );
  }

  if (status === AuthStatus.UNAUTHENTICATED || !canAccess) {
    onUnauthenticated();
    return null;
  }

  return children as React.JSX.Element;
};

export default Auth;
