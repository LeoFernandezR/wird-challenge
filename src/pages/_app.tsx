import store from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { Provider } from "react-redux";
import AppLayout from "@/components/AppLayout";

const pokemon = localFont({
  src: "./Pokemon Classic.ttf",
  variable: "--font-pokemon",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${pokemon.variable} font-sans`}>
      <Provider store={store}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </Provider>
    </div>
  );
}
