import TicketItem from "./TicketItem";
import css from "@/styles/dashboard.module.css";

const TicketList: React.FC = () => {
  return (
    <div className="grid grid-cols-6 p-2">
      <TicketItem
        text="Ho un problema con il pagamento porccodi"
        dateTicket="16:12:2027"
        taxonomy="DUI"
        id="ID 15151"
        lastMessage="17:11:2027"
        open={false}
        answered={false}
      />
      <TicketItem
        text="Ho un problema con il i certifcati di asseco"
        dateTicket="16:12:2027"
        taxonomy="ASSECO"
        id="ID 14116"
        lastMessage="15:12:1212"
        open={true}
        answered={true}
      />
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
