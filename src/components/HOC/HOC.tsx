import DefaultFont from "./DefaultFont";
import Providers from "./Providers";

/**
 * The HOC Component.
 *
 * @param children The Component children.
 * @returns `React.JSX.Element`
 */
/* prettier-ignore */
const HOC: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <Providers>
            <DefaultFont>
                {children}
            </DefaultFont>
        </Providers>
    )
}

export default HOC;
