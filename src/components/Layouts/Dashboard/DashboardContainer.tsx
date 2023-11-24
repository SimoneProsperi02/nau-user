/** 
 * The DashboardContainer Component.
 * @param props The Component props
 * @returns React.JSX.Element
 
 */

import css from "./dashboard.module.css";
import { useCallback, useState, useMemo } from "react";
import ProfileUser from "@/components/Widgets/Dashboard/Tickets/ProfileUser";
import LeftSecWrapper from "@/components/Widgets/Dashboard/Command/LeftSecWrapper";

import useSearchHook from "@/hooks/useSearch";
import TicketList from "@/components/Widgets/Dashboard/Tickets/TicketList";
import Ticket from "@/lib/models/Entities/Ticket";
import { NextPage } from "next";
import SelectService from "@/components/Widgets/Dashboard/Tickets/Command/TicketFilter/SelectService";
import SelectStatus from "@/components/Widgets/Dashboard/Tickets/Command/TicketFilter/SelectStatus";
import services from "@/data/General/Services";
import tickets from "@/data/General/Tickets";
import status from "@/data/General/status";

export type onSelectServiceType = (
  e: React.MouseEvent<HTMLButtonElement>,
  service: string
) => void;

export type onSelectStatusType = (
  e: React.MouseEvent<HTMLButtonElement>,
  status: string
) => void;

type TicketItemsProps = {
  ticket: Ticket;
};

const DashboardContainer: NextPage<TicketItemsProps> = (props) => {
  const [value, setValue] = useState("");
  const [filteredService, SetFilteredService] = useState("");
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Servizio ticket");
  const [selectStausOpen, setSelectStatusOpen] = useState(false);
  const [filteredStatus, SetFilteredStatus] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("Stato ticket");

  const result = useSearchHook(tickets, value);
  const filteredSerivces = useMemo(() => {
    if (selectedService === "TUTTI" || selectedService === "Servizio ticket")
      return result;
    return result.filter((ticket) => selectedService == ticket.taxonomy);
  }, [selectedService, result]);
  const filteredStato = useMemo(() => {
    if (selectedStatus === "Stato ticket" || selectedStatus === "TUTTI")
      return filteredSerivces;
    return filteredSerivces.filter(
      (ticket) => selectedStatus === ticket.status
    );
  }, [selectedStatus, filteredSerivces]);

  const onSelectStatus: onSelectStatusType = useCallback((e, status) => {
    setSelectedStatus(status);
    setSelectStatusOpen(false);
    SetFilteredStatus(status);
  }, []);

  const onSelectService: onSelectServiceType = useCallback((e, service) => {
    setSelectedService(service);
    setSelectOpen(false);
    SetFilteredService(service);
  }, []);

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
            <SelectService
              services={services}
              onSelectService={onSelectService}
              selectedService={selectedService}
              onSetSelectOpen={setSelectOpen}
              selectOpen={selectOpen}
            />
            <SelectStatus
              status={status}
              onSelectStatus={onSelectStatus}
              selectedStatus={selectedStatus}
              onSetSelectOpen={setSelectStatusOpen}
              selectOpen={selectStausOpen}
            />
          </div>
        </div>

        <TicketList tickets={filteredStato} />
      </div>
    </div>
  );
};

export default DashboardContainer;
