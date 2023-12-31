import HOC from "@/components/HOC/HOC";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HOC>
      <Component {...pageProps} />
    </HOC>
  );
}
