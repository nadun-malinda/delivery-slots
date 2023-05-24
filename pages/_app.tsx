import type { AppProps } from "next/app";
import { DeliveryProvider } from "@/contexts/DeliveryContext";
import { Layout } from "@/components/layout";
import "../src/styles/globals.css";

/**
 * Custom Next.js App component.
 * Wraps the entire application with the DeliveryProvider and Layout components.
 *
 * @param Component - The current page component.
 * @param pageProps - The props for the current page.
 * @returns The wrapped application component.
 */
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DeliveryProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DeliveryProvider>
  );
}
