// pages/_app.tsx
import { client } from "@/apollo";
import GNB from "@/components/molecules/bars/GlobalNavigationBar";
import { css, Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { reset } from "./../styles/reset";
import { ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <Global
          styles={css`
            ${reset}
          `}
        />
        <GNB></GNB>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
