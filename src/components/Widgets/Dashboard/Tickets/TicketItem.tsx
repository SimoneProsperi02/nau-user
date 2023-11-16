import MailClose from "@/components/UI/Icons/MailClose";
import MailOpen from "@/components/UI/Icons/MailOpen";
import Padlock from "@/components/UI/Icons/Padlock";
import PadlockOpen from "@/components/UI/Icons/PadlockOpen";
import { useState } from "react";
import { idText } from "typescript";

type TicketItemsProps = {
  text: string;
  dateTicket: string;
  url?: string;
  taxonomy: string;
  id?: string;
  lastMessage: string;
  open: boolean;
  answered: boolean;
};

const TicketItem: React.FC<
  TicketItemsProps & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { text, taxonomy, id, lastMessage, dateTicket, open, answered } = props;
  const [isAnswered, setIsAnswered] = useState(open);
  const [isOpen, setIsOpen] = useState(answered);

  return (
    <>
      <div>
        <p>{id}</p>
        <p>{dateTicket}</p>
      </div>
      <p>
        <p className="text-sm">{text}</p>

        <p className="px-1 bg-blueNavy rounded text-white self-auto">
          {taxonomy}
        </p>
      </p>
      <p></p>
      <p>{lastMessage}</p>
      {isAnswered ? (
        <MailOpen className="w-6 h-6" />
      ) : (
        <MailClose className="w-6 h-6" />
      )}

      {isOpen ? (
        <PadlockOpen className="w-6 h-6" />
      ) : (
        <Padlock className="w-6 h-6" />
      )}
    </>
  );
};

export default TicketItem;

{
  /* <div className="border p-4 w-[100%]  rounded-[10px] bg-[#c0c0c04f] h-24 ">
      <section className="pt-2 flex text-sm justify-between mr-[73px] ">
        <div className="flex">
          <div className=" flex flex-col gap-2">
            <p className="pr-28 font-bold">{id}</p>
            {dateTicket}
          </div>
          <div className="pl-6">
            <p className="text-sm mb-3">{text}</p>
            <span className="p-1 bg-blueNavy rounded text-white ">
              {taxonomy}
            </span>
          </div>
        </div>
        <div className="flex gap-[90px] ">
          <p>{lastMessage}</p>

          {isAnswered ? (
            <MailOpen className="w-6 h-6" />
          ) : (
            <MailClose className="w-6 h-6" />
          )}

          {isOpen ? (
            <PadlockOpen className="w-6 h-6" />
          ) : (
            <Padlock className="w-6 h-6" />
          )}
        </div>
      </section>
    </div> */
}
