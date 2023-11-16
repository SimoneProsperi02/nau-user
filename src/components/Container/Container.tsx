/**
 * The LoginContainer Component.
 * @param props The Component props
 * @returns React.JSX.Element
 *
 */

const PageContainer: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <div
      {...props}
      className=" h-screen items-center flex justify-center flex-col w-full text-center "
    />
  );
};

export default PageContainer;
