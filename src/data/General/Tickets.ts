import Ticket from "@/lib/models/Entities/Ticket";

const ticket1: Ticket = {
  id: 1,
  openDate: new Date(),
  content:
    "buongiorno, nel 2023 ho maturato n.5 crediti deontologici per il biennio 2023-24. Tuttavia il sistema me ne riconosce solo 2 per il 2023. Come crediti totali me ne appaiono, correttamente, 5. Si può correggere l'errore? Grazie",
  taxonomy: "DUI",
  lastMessage: new Date(),
  answered: true,
  status: "CHIUSO",
  baseUrl: "/",
};
const ticket2: Ticket = {
  id: 2,
  openDate: new Date(),
  content: `Buongiorno,
    ho provveduto ad acquistare l'ebook come da scherma e dettaglio transazione, ma non riesco ad effettuare il download, mi potete aitare? 
    lascio anche un recapito telefonico 3396973277
    Vi ringrazio
    Andrea Giovannetti`,
  taxonomy: "ASSECO",
  lastMessage: new Date(),
  answered: true,
  status: "CHIUSO",
  baseUrl: "/",
};
const ticket3: Ticket = {
  id: 3,
  openDate: new Date(),
  content: `Buongiorno,
    ho provveduto ad acquistare l'ebook come da scherma e dettaglio transazione, ma non riesco ad effettuare il download, mi potete aitare? 
    lascio anche un recapito telefonico 3396973277
    Vi ringrazio
    Andrea Giovannetti`,
  taxonomy: "DUI",
  lastMessage: new Date(),
  answered: true,
  status: "IN LAVORAZIONE",
  baseUrl: "/",
};
const ticket4: Ticket = {
  id: 4,
  openDate: new Date(),
  content: `Buongiorno,
    ho provveduto ad acquistare l'ebook come da scherma e dettaglio transazione, ma non riesco ad effettuare il download, mi potete aitare? 
    lascio anche un recapito telefonico 3396973277
    Vi ringrazio
    Andrea Giovannetti`,
  taxonomy: "FCO",
  lastMessage: new Date(),
  answered: false,
  status: "APERTO",
  baseUrl: "/",
};
const ticket5: Ticket = {
  id: 5,
  openDate: new Date(),
  content: `Buongiorno,
    ho provveduto ad acquistare l'ebook come da scherma e dettaglio transazione, ma non riesco ad effettuare il download, mi potete aitare? 
    lascio anche un recapito telefonico 3396973277
    Vi ringrazio
    Andrea Giovannetti`,
  taxonomy: "DUI",
  lastMessage: new Date(),
  answered: true,
  status: "APERTO",
  baseUrl: "/",
};
const ticket6: Ticket = {
  id: 6,
  openDate: new Date(),
  content: `Buongiorno,
    ho provveduto ad acquistare l'ebook come da scherma e dettaglio transazione, ma non riesco ad effettuare il download, mi potete aitare? 
    lascio anche un recapito telefonico 3396973277
    Vi ringrazio
    Andrea Giovannetti`,
  taxonomy: "FCO",
  lastMessage: new Date(),
  answered: false,
  status: "CHIUSO",
  baseUrl: "/",
};
const ticket7: Ticket = {
  id: 7,
  openDate: new Date(),
  content: `Buongiorno,
    ho provveduto ad acquistare l'ebook come da scherma e dettaglio transazione, ma non riesco ad effettuare il download, mi potete aitare? 
    lascio anche un recapito telefonico 3396973277
    Vi ringrazio
    Andrea Giovannetti`,
  taxonomy: "ASSECO",
  lastMessage: new Date(),
  answered: false,
  status: "IN LAVORAZIONE",
  baseUrl: "/",
};
const ticket8: Ticket = {
  id: 8,
  openDate: new Date(),
  content: `Buongiorno,
      Perché non trovo nulla su Onlyfans?
    Andrea Giovannetti`,
  taxonomy: "ASSECO",
  lastMessage: new Date(),
  answered: false,
  status: "APERTO",
  baseUrl: "/",
};
const ticket9: Ticket = {
  id: 9,
  openDate: new Date(),
  content: `Buongiorno,
      ho paura dei 730. Aiuto
    Andrea Giovannetti`,
  taxonomy: "DUI",
  lastMessage: new Date(),
  answered: false,
  status: "CHIUSO",
  baseUrl: "/",
};
const ticket10: Ticket = {
  id: 10,
  openDate: new Date(),
  content: `Buongiorno,
    non mi ricordo a quale ordine perofessionale appartengo e la segreteria mio risponde che sono solo scemo.
    Andrea Giovannetti`,
  taxonomy: "E-COMMERCE",
  lastMessage: new Date(),
  answered: true,
  status: "IN LAVORAZIONE",
  baseUrl: "/",
};
const ticket11: Ticket = {
  id: 11,
  openDate: new Date(),
  content: `Buongiorno,
    ho fatto puzzetta su Federico e si è arrabbiato. Richiedo intervento tecnico per placarlo. Cordialmente
    Andrea Giovannetti`,
  taxonomy: "E-COMMERCE",
  lastMessage: new Date(),
  answered: false,
  status: "CHIUSO",
  baseUrl: "/",
};
const ticket12: Ticket = {
  id: 12,
  openDate: new Date(),
  content: `Buongiorno,
      stamattina ho bevuto troppo... potreste aiutarmi a farmi passare la sbronza? Grazie
    Andrea Giovannetti`,
  taxonomy: "CERTIFICAZIONE",
  lastMessage: new Date(),
  answered: true,
  status: "APERTO",
  baseUrl: "/",
};

const tickets: Array<Ticket> = [
  new Ticket(ticket1),
  new Ticket(ticket2),
  new Ticket(ticket3),
  new Ticket(ticket4),
  new Ticket(ticket5),
  new Ticket(ticket6),
  new Ticket(ticket7),
  new Ticket(ticket8),
  new Ticket(ticket9),
  new Ticket(ticket10),
  new Ticket(ticket11),
  new Ticket(ticket12),
];

export default tickets;
