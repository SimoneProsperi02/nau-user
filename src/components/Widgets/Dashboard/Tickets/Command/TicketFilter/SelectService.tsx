import BaseIcon from "@/components/UI/Icons/BaseIcons";
import { HtmlHTMLAttributes, useState } from "react";
import services from "@/data/General/Services";
import { onSelectServiceType } from "@/components/Layouts/Dashboard/DashboardContainer";

/* prettier-ignore */
type ServicesProps = {
  services        : Array<string>
  selectedService : string
  onSelectService : onSelectServiceType,
  selectOpen      : boolean,
  onSetSelectOpen : React.Dispatch<React.SetStateAction<boolean>>
}

const SelectService: React.FC<
  HtmlHTMLAttributes<HTMLElement> & ServicesProps
> = (props) => {
  const {
    services,
    onSelectService,
    selectedService,
    selectOpen,
    onSetSelectOpen,
  } = props;

  return (
    <div className=" flex-col text-sm justify-center items-center px-2 font-semibold text-[#000000] ">
      <div
        onClick={() => onSetSelectOpen(true)}
        className="flex flex-row justify-between w-[9vw] p-2 rounded-[25px] cursor-pointer border border-solid border-green-cdl hover:bg-green-cdl hover:text-white"
      >
        <span>{selectedService}</span>
        <BaseIcon className="w-5" stroke="#000000">
          <path d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
        </BaseIcon>
      </div>

      {selectOpen && (
        <div
          onMouseLeave={() => onSetSelectOpen(false)}
          className={`flex flex-col bg-white my-2 p-1 rounded-[20px] border border-solid border-green-cdl fixed ${
            selectOpen
              ? "opacity-100` h-auto"
              : "opacity-0 h-0 transition-all duration-0 overflow-hidden "
          }`}
        >
          {services.map((service) => (
            <button
              onClick={(e) => onSelectService(e, service)}
              className={`flex justify-start items-center px-2 py-1 hover:bg-[#64b2309f] rounded-sm hover:text-black cursor-pointer ${
                selectedService === service
                  ? "bg-[#64b230c7] text-white rounded-[6px]"
                  : ""
              }`}
              key={service}
            >
              <span>{service}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectService;
