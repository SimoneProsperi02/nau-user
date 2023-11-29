import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
/**
 * The DefaultFont Component.
 *
 * @param children The Component children.
 * @returns `React.JSX.Element`
 */
/* prettier-ignore */
const DefaultFont: React.FC<React.PropsWithChildren> = ({ children }) => <main className={`${montserrat.className} relative`}>{children}</main>

export default DefaultFont;
