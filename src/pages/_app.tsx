import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import { mantineTheme } from "../style/mantineTheme";

export default function App(props: AppProps) {
  const {
    Component,
    pageProps: { session, ...pageProps },
  } = props;

  const [queryClient] = useState(() => new QueryClient({ defaultOptions: {} }));

  return (
    <>
      <Head>
        <title>memoer</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={session}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={mantineTheme}
          >
            <Component {...pageProps} />
          </MantineProvider>
        </SessionProvider>
      </QueryClientProvider>
    </>
  );
}
