import Ticket from "@/lib/models/Entities/Ticket";

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
  taxonomy: "ASSECO",
  lastMessage: new Date(),
  answered: false,
  close: false,
  baseUrl: "/",
};

const tickets: Array<Ticket> = [new Ticket(ticket1), new Ticket(ticket2)];

export default tickets;
