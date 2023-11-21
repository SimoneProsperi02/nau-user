/** 
 * The DashboardContainer Component.
 * @param props The Component props
 * @returns React.JSX.Element
 
 */

import css from "./dashboard.module.css";
import { useCallback, useState } from "react";
import ProfileUser from "@/components/Widgets/Dashboard/Tickets/ProfileUser";
import LeftSecWrapper from "@/components/Widgets/Dashboard/Command/LeftSecWrapper";

import useSearchHook from "@/hooks/useSearch";
import TicketWrapper from "@/components/Widgets/Dashboard/Tickets/TicketWrapper";
import Ticket from "@/lib/models/Entities/Ticket";
import { NextPage } from "next";
import SelectService from "@/components/Widgets/Dashboard/Tickets/Command/TicketFilter/SelectService";
import SelectStatus from "@/components/Widgets/Dashboard/Tickets/Command/TicketFilter/SelectStatus";
import services from "@/data/General/Services";

const service = services;

const DashboardContainer: NextPage = () => {
  const services = service;
  const ticket1: Ticket = {
    id: 145454,
    openDate: new Date(),
    content:
      "buongiorno, nel 2023 ho maturato n.5 crediti deontologici per il biennio 2023-24. Tuttavia il sistema me ne riconosce solo 2 per il 2023. Come crediti totali me ne appaiono, correttamente, 5. Si può correggere l'errore? Grazie",
    taxonomy: "DUI",
    lastMessage: new Date(),
    answered: true,
    close: true,
    baseUrl: "/",
  };
  const ticket2: Ticket = {
    id: 2454,
    openDate: new Date(),
    content: `Buongiorno,
    ho provveduto ad acquistare l'ebook come da scherma e dettaglio transazione, ma non riesco ad effettuare il download, mi potete aitare? 
    lascio anche un recapito telefonico 3396973277
    Vi ringrazio
    Andrea Giovannetti`,
    taxonomy: "Asseco",
    lastMessage: new Date(),
    answered: false,
    close: false,
    baseUrl: "/",
  };

  const tickets: Array<Ticket> = [new Ticket(ticket1), new Ticket(ticket2)];

  const [value, setValue] = useState("");
  const result = useSearchHook(tickets, value);

  const onSearchTicket: React.ChangeEventHandler<HTMLInputElement> =
    useCallback((e) => {
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
          <div className="flex mt-0">
            <SelectService services={services} />
            <SelectStatus />
          </div>
        </div>

        <TicketWrapper ticketWrapperItems={result} />
      </div>
    </div>
  );
};

export default DashboardContainer;
