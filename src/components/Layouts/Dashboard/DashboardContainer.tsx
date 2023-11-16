/** 
 * The DashboardContainer Component.
 * @param props The Component props
 * @returns React.JSX.Element
 
 */

import css from "@/styles/dashboard.module.css";
import { HTMLAttributes, useCallback, useState } from "react";

import TicketList from "@/components/Widgets/Dashboard/Tickets/TicketList";

import ProfileUser from "@/components/Widgets/Dashboard/Tickets/ProfileUser";
import LeftSecWrapper from "@/components/Widgets/Dashboard/Command/CommandWrapper";
import TicketFilter from "@/components/Widgets/Dashboard/Tickets/TicketFilter";
import TicketContHead from "@/components/Widgets/Dashboard/Tickets/TicketContHead";
import useSearchHook from "@/hooks/useSearch";
import TicketWrapper from "@/components/Widgets/Dashboard/Tickets/TicketWrapper";

const DashboardContainer: React.FC<HTMLAttributes<HTMLFormElement>> = () => {
  const [value, setValue] = useState("");
  const result = useSearchHook([], value);

  const onSearchTicket: React.ChangeEventHandler<HTMLInputElement> =
    useCallback((e) => {
      e;
      setValue(e.target.value);
    }, []);

  return (
    <div className={css.dashboard}>
      <ProfileUser />

      <div className={css.leftWrapper}>
        <LeftSecWrapper onSearchTicket={onSearchTicket} title="Search ticket" />
      </div>
      <div className={css.ticketWrapper}>
        <div className={css.headerTicketWrapper}>
          <section>
            <h1 className="text-green-cdl font-bold text-2xl ">
              I TUOI TICKET
            </h1>
          </section>
          <TicketFilter />
        </div>

        <TicketWrapper />
      </div>
    </div>
  );
};

export default DashboardContainer;

{
  /* <div className="text-green-cdl flex pt-6 pb-4 text-sm justify-between mr-16 font-semibold ">
          <TicketContHead />
        </div>
        <div className={css.ticketBody}>
          <TicketList />
        </div> */
}
