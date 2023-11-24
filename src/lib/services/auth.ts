import { isApiError } from "./helpersApi";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
const NEXT_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const logIn = async (loginData: AuthApi.AuthData) => {
  if (!NEXT_PUBLIC_API_URL || !NEXT_PUBLIC_API_KEY)
    throw new Error("Non è possibile efftuare la chiamata");

  const url = new URL("login_cdl", NEXT_PUBLIC_API_URL);

  const response = await fetch(url, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": NEXT_PUBLIC_API_KEY,
    },
    body: JSON.stringify(loginData),
  });

  const data = (await response.json()) as AuthApi.LoginResponse;

  if (isApiError(data)) throw data.data;

  return data.data;
};
