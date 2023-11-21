/**
 * The ticketWrapper Component.
 * @param props The Component props
 * @returns React.JSX.Element
 *
 */

import TicketContHead from "./TicketContHead";
import { HtmlHTMLAttributes } from "react";
import TicketItem from "./TicketItem";
import css from "@/components/Layouts/Dashboard/dashboard.module.css";

type TicketWrapperProps = {
  ticketWrapperItems: Array<any>;
};

const TicketWrapper: React.FC<
  HtmlHTMLAttributes<HTMLTableElement> & TicketWrapperProps
> = (props) => {
  const htmlProps = { ...props };
  const { ticketWrapperItems } = htmlProps;

  const classNames = [
    "flex flex-col h-[65vh] overflow-y-scroll ",
    css.listTicket,
  ];

  return (
    <section className="ml-16 ">
      <TicketContHead />

      <div className={classNames.join(" ")}>
        {ticketWrapperItems.map((ticket) => {
          return <TicketItem ticket={ticket} />;
        })}
      </div>
    </section>
  );
};

export default TicketWrapper;
