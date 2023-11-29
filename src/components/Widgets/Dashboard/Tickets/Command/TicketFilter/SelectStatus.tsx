/*
the Select container must have position fixed... for now..
*/

import BaseIcon from "@/components/UI/Icons/BaseIcons";
import { HtmlHTMLAttributes } from "react";
import { onSelectStatusType } from "@/components/Layouts/Dashboard/DashboardContainer";

type StatusProps = {
  status: Array<string>;
  onSelectStatus: onSelectStatusType;
  selectedStatus: string;
  onSetSelectOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectOpen: boolean;
};

const SelectStatus: React.FC<HtmlHTMLAttributes<HTMLElement> & StatusProps> = (
  props
) => {
  const {
    status,
    onSelectStatus,
    selectedStatus,
    onSetSelectOpen,
    selectOpen,
  } = props;
  return (
    <div className=" flex-col text-sm justify-center items-center px-2 font-semibold text-[#000000] ">
      <div
        onClick={() => onSetSelectOpen((prev) => !prev)}
        className="flex flex-row justify-between items-center bg-white w-[9vw] p-2 rounded-[25px] cursor-pointer border border-solid border-green-cdl hover:bg-green-cdl hover:text-white"
      >
        <span>{selectedStatus}</span>
        <BaseIcon className="w-5" stroke="#000000">
          <path d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
        </BaseIcon>
      </div>
      <div
        onMouseLeave={() => onSetSelectOpen(false)}
        className={`flex flex-col bg-white my-2 p-1 rounded-[20px] border border-solid border-green-cdl fixed  ${
          selectOpen
            ? "opacity-100` h-auto "
            : "opacity-0 h-0 transition-all duration-0 overflow-hidden"
        }`}
      >
        {status.map((item) => (
          <button
            onClick={(e) => {
              onSelectStatus(e, item);
              onSetSelectOpen(false);
              console.log(item);
            }}
            className={`flex justify-start items-center px-2 py-1 hover:bg-[#64b2309f] hover:text-black cursor-pointer  ${
              selectedStatus === item ? "bg-[#64b230c7] text-white " : ""
            }`}
            key={item}
          >
            <span>{item}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectStatus;
// const [selectedStatus, setSelectedStatus] = useState("Stato ticket");
//   const [selectOpen, setSelectOpen] = useState(false);
