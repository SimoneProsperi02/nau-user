/**
 * The Button Component.
 * @param props The Component props
 * @returns React.JSX.Element
 *
 */

import { Url } from "next/dist/shared/lib/router/router";

type ButtonProps = React.PropsWithChildren<
  React.ComponentProps<"button"> & {
    href?: Url;
    target?: "_self" | "_blank" | "_parent" | "_top";
  }
>;

const Button: React.FC<ButtonProps> = (props): React.JSX.Element => {
  const baseStyle =
    "bg-green-cdl mt-10 ml-[5px] p-[6px_35px] rounded-[36px] text-[#ffffff] text-lg border-2 border-green-cdl hover:bg-white hover:text-green-cdl transition-all duration-300";
  const classNames = [baseStyle, props.className];
  return (
    <button {...props} className={classNames.join(" ")}>
      {props.title}
    </button>
  );
};

export default Button;
