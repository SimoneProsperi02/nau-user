import BaseIcon from "./BaseIcons";

const AddIcon = (props: React.SVGAttributes<SVGSVGElement>) => {
  return (
    <BaseIcon {...props}>
      <svg stroke="#ffffff">
        <path d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </BaseIcon>
  );
};

export default AddIcon;
