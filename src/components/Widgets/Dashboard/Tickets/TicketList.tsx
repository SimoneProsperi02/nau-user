import { HTMLAttributes } from "react";
import TicketItem from "./TicketItem";
import css from "@/components/Layouts/Dashboard/dashboard.module.css";
import Ticket from "@/lib/models/Entities/Ticket";

type TicketListProps = {
  tickets: Array<Ticket>;
};

const TicketList: React.FC<HTMLAttributes<HTMLDivElement> & TicketListProps> = (
  props
) => {
  const classNames = [
    "flex flex-col h-[65vh] overflow-y-scroll ",
    css.listTicket,
  ];

  return (
    <div className={classNames.join(" ")}>
      {props.tickets.map((ticket) => {
        return <TicketItem ticket={ticket} />;
      })}
    </div>
  );
};

export default TicketList;

{
  /* <TicketItem
        text="Ho un problema con il pagamento porccodi"
        dateTicket="16:12:2027"
        taxonomy="DUI"
        id="15151"
        lastMessage="17:11:2027"
        open={false}
        answered={false}
      />
      <TicketItem
        text="Ho un problema con il i certifcati di asseco"
        dateTicket="16:12:2027"
        taxonomy="ASSECO"
        id="14116"
        lastMessage="15:12:1212"
        open={true}
        answered={true}
      /> */
}
