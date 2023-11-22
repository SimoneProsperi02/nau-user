export type TicketsProps = {
  /*
   * -Id del ticket
   */
  id: number;
  /*
  Data apertura del ticket
   */
  openDate?: string | Date;
  /*
   * -Testo contenuto all' interno del ticket
   */
  content: string;
  /*
   * -Tipologia del servizio del ticket
   */
  taxonomy: string;
  /*
   * -Data ultimo messaggio inviato
   */
  lastMessage?: string | Date;
  /*
   * -Se il ticket aperto ha ricevuto una risposta o meno
   */
  answered: boolean;
  /*
   * -Se il ticket è aperto o chiuso
   */
  close: boolean;
  /*
   * -La url per visualizzare il ticket
   */
  baseUrl: string;
};

class Ticket implements TicketsProps {
  id;
  openDate;
  content;
  taxonomy;
  lastMessage;
  answered;
  close;
  baseUrl;

  constructor(props: TicketsProps) {
    this.id = props?.id || Math.random();
    this.openDate = props.openDate ? new Date(props.openDate) : undefined;
    this.content = props.content;
    this.taxonomy = props.taxonomy;
    this.lastMessage = props.lastMessage
      ? new Date(props.lastMessage)
      : undefined;
    this.answered = props.answered;
    this.close = props.close;
    this.baseUrl = props.baseUrl;
  }
}

export default Ticket;
