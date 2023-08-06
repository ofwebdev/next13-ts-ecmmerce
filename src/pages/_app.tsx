import RootLayout from "@/components/layout/RootLayout";
import "@/styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
