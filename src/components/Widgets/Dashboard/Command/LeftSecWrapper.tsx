import Button from "@/components/UI/Buttons/Button";
import AddIcon from "@/components/UI/Icons/AddIcon";
import Search from "@/components/UI/Icons/Search";
import BaseInput from "@/components/UI/Inputs/Input";
import css from "@/components/Layouts/Dashboard/dashboard.module.css";
import { HTMLAttributes } from "react";

/** 
 * The LeftSecWrapper Component.
 * @param props The Component props
 * @returns React.JSX.Element
 
 */

type LeftSecWrapperProps = {
  onSearchTicket: React.ChangeEventHandler<HTMLInputElement>;
};

const LeftSecWrapper: React.FC<
  HTMLAttributes<HTMLDivElement> & LeftSecWrapperProps
> = (props) => {
  const { onSearchTicket } = props;
  return (
    <>
      <section className={css.title} {...props}>
        <p className={css.titleAU}>Assistenza Unica</p>
        Consulenti del lavoro
      </section>
      <section className={css.sxCommWrapper}>
        <div className={css.sxWrapperBtn}>
          <Button title="NUOVO TICKET" className={css.sxCommBtn} />
          <AddIcon className="w-5 h-5 absolute bottom-[11px] left-5" />
        </div>
        <div className={css.sxWrapperBtn}>
          <BaseInput
            onChange={onSearchTicket}
            type="text"
            className={css.sxCommInput}
            label="Search Ticket"
          />
          <Search className="w-5 h-5 absolute bottom-4 left-5" />
        </div>
      </section>
      <img
        src="/assets/IMG_SX_BOTTOM.png"
        alt=""
        className="absolute bottom-0  w-[23%]"
      />
    </>
  );
};

export default LeftSecWrapper;
