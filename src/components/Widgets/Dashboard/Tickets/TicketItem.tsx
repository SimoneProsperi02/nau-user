import MailClose from "@/components/UI/Icons/MailClose";
import MailOpen from "@/components/UI/Icons/MailOpen";
import Padlock from "@/components/UI/Icons/Padlock";
import PadlockOpen from "@/components/UI/Icons/PadlockOpen";
import Ticket from "@/lib/models/Entities/Ticket";
import { useState } from "react";

type TicketItemsProps = {
  ticket: Ticket;
};

const TicketItem: React.FC<
  TicketItemsProps & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { taxonomy, id, lastMessage, answered, openDate, content, close } =
    props.ticket;
  const [isAnswered, setIsAnswered] = useState(close);
  const [isOpen, setIsOpen] = useState(answered);

  const formattedOpenDate = openDate.toLocaleString(undefined, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const formattedMessageDate = lastMessage.toLocaleString(undefined, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="grid grid-cols-2 border mb-2 rounded-[10px] p-6 bg-[#e6e6e64f]">
      <div className="grid grid-cols-3 ">
        <div className="col-span-1">
          <p className="font-bold text-sm mb-3">ID {id}</p>
          <p className="text-xs font-medium">{formattedOpenDate}</p>
        </div>
        <div className="col-span-2">
          <p className="text-clamp text-[12px] mb-2 font-medium">{content}</p>

          <span className="px-1 bg-blueNavy rounded text-white self-auto text-sm ">
            {taxonomy}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3  ml-28">
        <p className="text-xs font-medium  ml-2">{formattedMessageDate}</p>
        <p>
          {isAnswered ? (
            <MailOpen className="w-6 h-6 ml-12" />
          ) : (
            <MailClose className="w-6 h-6 ml-12" />
          )}
        </p>
        <p>
          {isOpen ? (
            <PadlockOpen className="w-6 h-6  ml-8" />
          ) : (
            <Padlock className="w-6 h-6  ml-8" />
          )}
        </p>
      </div>
    </div>
  );
};

export default TicketItem;
