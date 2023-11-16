/** 
 * The TickerFilter Component.
 * @param props The Component props
 * @returns React.JSX.Element
 
 */

import { HTMLAttributes } from "react";

const TicketFilter: React.FC<HTMLAttributes<HTMLSelectElement>> = (props) => {
  return (
    <section>
      <select
        name="Seleziona il servizio"
        className="mr-12 p-2 border border-green-cdl rounded-[36px] text-sm font-semibold focus:border-green-800 outline-none"
        {...props}
      >
        <option value="DUI">DUI</option>
        <option value="ASSECO">ASSECO</option>
        <option value="Formazione continua">Formazione continua</option>
        <option value="Certificazione">Certificazione</option>
      </select>
      <select
        name="Seleziona il servizio"
        className="mr-12 p-2 border border-green-cdl rounded-[36px] text-sm font-semibold focus:border-green-800 outline-none"
        {...props}
      >
        <option value="DUI">CHIUSO</option>
        <option value="ASSECO">APERTO</option>
        <option value="Formazione continua">IN LAVORAZIONE</option>
      </select>
    </section>
  );
};

export default TicketFilter;
