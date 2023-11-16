import css from "@/styles/Input.module.css";
/**
 * The LoginInput Component.
 * @param props The Component props
 * @returns React.JSX.Element
 *
 */

import { forwardRef } from "react";

type InputProps = {
  label: string;
  type: "text" | "email" | "password" | "checkbox" | "datetime-local" | "file";
} & React.InputHTMLAttributes<HTMLInputElement>;

const PasswordInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const htmlProps = { ...props };
  delete (htmlProps as any).label;

  const baseStyle =
    "m-1 gap-2 outline-none rounded-[36px] bg-inputColor text-green-cdl p-3 pl-4 w-full focus:bg-white focus:border focus:border-green-cdl";
  const classNames = [baseStyle, props.className];

  return <input ref={ref} {...props} className={classNames.join(" ")} />;
});

export default PasswordInput;
