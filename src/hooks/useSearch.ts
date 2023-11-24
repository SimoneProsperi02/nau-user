import { useMemo } from "react";

const useSearchHook = <T extends unknown = unknown>(
  data: T[],
  searchText: string
) => {
  const res = useMemo(
    () =>
      data.filter((obj) => {
        return JSON.stringify(obj)
          .toLowerCase()
          .trim()
          .includes(searchText.toLowerCase().trim());
      }),
    [searchText, data]
  );

  return res;
};

export default useSearchHook;
