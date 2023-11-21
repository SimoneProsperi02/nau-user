/*
the Select container must have position fixed... for now..
*/

import BaseIcon from "@/components/UI/Icons/BaseIcons";
import { useState } from "react";

const status = ["TUTTI", "APERTO", "IN LAVORAZIONE", "CHIUSO"];

const SelectStatus: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState("Stato ticket");
  const [selectOpen, setSelectOpen] = useState(false);
  return (
    <div className=" flex-col text-sm justify-center items-center px-2 font-semibold text-[#000000] ">
      <div
        onClick={() => setSelectOpen(true)}
        className="flex flex-row justify-between items-center bg-white w-[9vw] p-2 rounded-[25px] cursor-pointer border border-solid border-green-cdl hover:bg-green-cdl hover:text-white"
      >
        <span>{selectedStatus}</span>
        <BaseIcon className="w-5" stroke="#000000">
          <path d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
        </BaseIcon>
      </div>
      <div
        onMouseLeave={() => setSelectOpen(false)}
        className={`flex flex-col bg-white my-2 p-1 rounded-[20px] border border-solid border-green-cdl fixed  ${
          selectOpen
            ? "opacity-100` h-auto "
            : "opacity-0 h-0 transition-all duration-0 overflow-hidden"
        }`}
      >
        {status.map((item) => (
          <div
            onClick={() => {
              setSelectedStatus(item);
              setSelectOpen(false);
            }}
            className={`flex justify-start items-center px-2 py-1 hover:bg-[#64b2309f] hover:text-black cursor-pointer  ${
              selectedStatus === item ? "bg-[#64b230c7] text-white " : ""
            }`}
            key={item}
          >
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectStatus;
