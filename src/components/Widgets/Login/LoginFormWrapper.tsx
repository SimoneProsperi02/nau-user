/**
 * The LoginFormWrapper Component.
 * @param props The Component props
 * @returns React.JSX.Element
 *
 */

import css from "@/styles/form.module.css";

const LoginFormWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <section className={css.secWrap}>
      <h1 className={css.title}>USER LOGIN</h1>
      {children}
    </section>
  );
};

export default LoginFormWrapper;
