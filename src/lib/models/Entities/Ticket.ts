export type TicketsProps = {
  /*
   * Unique identifier of the ticket.
   */
  id: number;

  /*
   * Opening date of the ticket. It can be either a string or a Date object.
   */
  openDate?: string | Date;

  /*
   * Text content inside the ticket.
   */
  content: string;

  /*
   * Type of service associated with the ticket.
   */
  taxonomy: string;

  /*
   * Date of the last message sent in the ticket. It can be either a string or a Date object.
   */
  lastMessage?: string | Date;

  /*
   * Indicates whether the open ticket has received a response or not.
   */
  answered: boolean;

  /*
   * Current status of the ticket (open or closed).
   */
  status: string;

  /*
   * URL to view the ticket.
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
  status;
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
    this.status = props.status;
    this.baseUrl = props.baseUrl;
  }
}

export default Ticket;
