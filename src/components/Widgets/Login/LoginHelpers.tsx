import css from "@/styles/checkbox.module.scss";

/**
 * The LoginWidgets Component.
 * @param props The Component props
 * @returns React.JSX.Element
 *
 */

const LoginHelpers: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
): React.JSX.Element => {
  return (
    <>
      <div {...props} className={css.wrapper}>
        <div className={css.checkboxWrapper}>
          <input type="checkbox" />
          <span></span>
        </div>

        <p className="text-[13px] ml-1 font-semibold text-[#999999]">
          Remember
        </p>
      </div>
      <a
        href="https://www.consulentidellavoro.it/password-reset"
        className="text-[13px] pr-5 text-[#999999] font-semibold hover:text-green-cdl"
      >
        Forgot password?
      </a>
    </>
  );
};

export default LoginHelpers;
