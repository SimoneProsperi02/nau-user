type StatusTicketProps = {
  TUTTI: boolean | "TUTTI";
  APERTO: boolean | "APERTO";
  CHIUSO: boolean | "CHIUSO";
  IN_LAVORAZIONE: boolean | "IN LAVORAZIONE";
};

class Status implements StatusTicketProps {
  TUTTI;
  APERTO;
  CHIUSO;
  IN_LAVORAZIONE;

  constructor(props: StatusTicketProps) {
    this.TUTTI = props?.TUTTI;
    this.APERTO = props?.APERTO;
    this.CHIUSO = props?.CHIUSO;
    this.IN_LAVORAZIONE = props?.IN_LAVORAZIONE;
  }
}

export default Status;
