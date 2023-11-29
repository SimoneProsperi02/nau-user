import css from "./SpinLoader.module.scss";

type SpinLoaderProps = React.SVGAttributes<SVGSVGElement> & {
  variant?: string;
};

const SpinLoader = (props: SpinLoaderProps): JSX.Element => {
  const htmlProps = { ...props };
  delete htmlProps.variant;
  const classNames = [css.loader, props.className];
  const strokeWidth = props.strokeWidth ? +props.strokeWidth : 2;
  const viewBox = 24 + strokeWidth;
  if (props.variant) {
    classNames.push(css[`v${props.variant}`]);
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox={`0 0 ${viewBox} ${viewBox}`}
      stroke="currentColor"
      strokeLinecap="round"
      {...props}
      strokeWidth={strokeWidth}
      className={classNames.join(" ")}
    >
      <circle
        r={viewBox / 2 - strokeWidth / 2}
        cx={viewBox / 2}
        cy={viewBox / 2}
      />
      <circle
        r={viewBox / 2 - strokeWidth / 2}
        cx={viewBox / 2}
        cy={viewBox / 2}
      />
    </svg>
  );
};

export default SpinLoader;
