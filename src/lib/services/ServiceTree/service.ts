import { isApiError } from "../helpersApi";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
const NEXT_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getServices = async () => {
  if (!NEXT_PUBLIC_API_URL || !NEXT_PUBLIC_API_KEY)
    throw new Error("Non è possibile efftuare la chiamata");

  const url = new URL("services", NEXT_PUBLIC_API_URL);

  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
  });
  const data = (await response.json()) as ServiceApi.GetServicesResponse;

  if (isApiError(data)) throw data.data;

  return data.data;
};
