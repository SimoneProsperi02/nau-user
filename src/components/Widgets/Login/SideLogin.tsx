import css from "@/styles/img.module.css";
import Image from "next/image";

/**
 * The LoginImageSection Component.
 * @param props The Component props
 * @returns React.JSX.Element
 *
 */

const LoginImageSection: React.FC = (props) => {
  return (
    <section {...props} className={css.secImg}>
      <div className={css.titleCont}>
        <div className={css.title}>
          <p className={css.titleAU}>Assistenza Unica</p>
          Consulenti del lavoro
        </div>
        <Image
          src="/assets/new_foto_nau.png"
          alt="IMG_BACKGROUND"
          width={600}
          height={608}
          quality={100}
          className={css.img}
        />
      </div>
    </section>
  );
};

export default LoginImageSection;
