/** 
 * The TicketContHead Component.
 * @param props The Component props
 * @returns React.JSX.Element
 
 */

import { HTMLAttributes } from "react";

const TicketContHead: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <>
      <p>Id/Servizio Ticket</p>
      <p>Ticket</p>
      <p></p>
      <p>Ultimo messaggio</p>
      <p>Risposta ticket</p>
      <p>Stato ticket</p>
    </>
  );
};

export default TicketContHead;
