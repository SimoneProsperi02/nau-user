/**
 * The Providers Component.
 * @param props The Component props
 * @returns React.JSX.Element
 *
 */

import { AuthProvider } from "@/store/Auth/AuthProvider";

const Providers: React.FC<React.PropsWithChildren> = (props) => {
  return <AuthProvider>{props.children}</AuthProvider>;
};

export default Providers;
