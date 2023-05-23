import type { AppProps } from "next/app";
import { DeliveryProvider } from "@/contexts/DeliveryContext";
import { Layout } from "@/components/layout";
import "../src/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DeliveryProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DeliveryProvider>
  );
}
