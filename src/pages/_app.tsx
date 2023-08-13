import RootLayout from "@/components/layout/RootLayout";
import "@/styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import type { AppProps } from "next/app";

import { persistor, store } from "../../src/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </PersistGate>
    </Provider>
  );
}
