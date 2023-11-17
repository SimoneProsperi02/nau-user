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
        <p className="text-sm col-span-1">Id/Servizio Ticket</p>
        <p className="text-sm col-span-2">Ticket</p>
      </div>
      <div className="grid grid-cols-3">
        <p className="text-sm ">Ultimo messaggio</p>
        <p className="text-sm ">Risposta ticket</p>
        <p className="text-sm ">Stato ticket</p>
      </div>
    </div>
  );
};

export default TicketContHead;
