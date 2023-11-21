import { useMemo } from "react";

const useFilterHook = <T extends unknown = unknown>(
  data: T[],
  selectFilter: string
) => {
  const res = useMemo(
    () => data.filter((obj) => JSON.stringify(obj)),
    [selectFilter, data]
  );
  return res;
};
export default useFilterHook;
