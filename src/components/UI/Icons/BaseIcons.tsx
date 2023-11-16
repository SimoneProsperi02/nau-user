/* eslint-disable react/display-name */
import { forwardRef } from "react";

const BaseIcon = forwardRef(
  (
    props: React.SVGAttributes<SVGSVGElement>,
    ref: React.ForwardedRef<SVGSVGElement>
  ) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 26 26"
        fill="none"
        stroke="#65b230"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        {...props}
        className={`icon ${props.className}`}
      >
        {props.children}
      </svg>
    );
  }
);

export default BaseIcon;
