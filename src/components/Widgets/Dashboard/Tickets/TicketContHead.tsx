/** 
 * The TicketContHead Component.
 * @param props The Component props
 * @returns React.JSX.Element
 
 */

import { HTMLAttributes } from "react";

const TicketContHead: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div className="grid grid-cols-2 text-green-cdl p-4 ">
      <div className="grid grid-cols-3">
        <p className="text-xs font-semibold col-span-1">Id/Servizio Ticket</p>
        <p className="text-xs font-semibold col-span-2">Ticket</p>
      </div>
      <div className="grid grid-cols-3 ml-28">
        <p className="text-xs font-semibold">Ultimo messaggio</p>
        <p className="text-xs font-semibold">Risposta ticket</p>
        <p className="text-xs font-semibold">Stato ticket</p>
      </div>
    </div>
  );
};

export default TicketContHead;
