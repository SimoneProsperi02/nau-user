import { UserRole } from "@/lib/models/Entities/User";
import { AuthState } from "@/store/Auth/AuthContext";
import { NextPage } from "next";
import { AppProps } from "next/app";
declare global {
  /**
   * Custom _app props.
   *
   */
  type CustomAppProps = {
    //menuItems?: MenuItem[]
  };

  /**
   * Custom Initial page props.
   *
   */
  type CustomInitialProps = {
    session?: AuthState["session"];
  };

  /**
   * Augmented NextPage type.
   *
   * Allows you to define getLayout to your Page Component.
   * Allows you to define auth options to your Page Component.
   *
   * { ie.
   *   `const YourPage: AugmentedNextPage<YourCustomPropsInterface> = (context): JSX.Element => { ...code...}`
   *    YourPage.getLayout = ( page ) => ...
   *    YourPage.auth = { ... }
   * }
   */
  /* prettier-ignore */
  type AugmentedNextPage<P = {}, IP = P> = NextPage<P, IP> & {
        auth?: boolean | {
            /** Required role to access this page. */
            role            : UserRole.OPERATORE
            /** Custom loading component. */
            loading         ?: React.ReactNode
            /** Custom unauthorized redirect url. */
            unauthorized    : string
            content         ?: React.ReactNode
        }
    }

  /**
   * Internally used in _app.tsx to add types to its props.
   *
   */
  type AugmentedAppProps<P> = AppProps<P> & {
    Component: AugmentedNextPage<P>;
  };
}
