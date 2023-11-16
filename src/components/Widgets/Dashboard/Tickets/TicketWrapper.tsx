/**
 * The ticketWrapper Component.
 * @param props The Component props
 * @returns React.JSX.Element
 *
 */

import TicketContHead from "./TicketContHead";
import TicketList from "./TicketList";

const TicketWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <section className="mx-16 ">
      <div className=" grid grid-cols-6 text-green-cdl p-2 ">
        <TicketContHead />
      </div>
      <TicketList />
    </section>
  );
};

export default TicketWrapper;
