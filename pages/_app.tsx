// pages/_app.tsx
import { client } from "@/apollo";
import GNB from "@/components/molecules/bars/GNB";
import { css, Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

const globalStyle = css`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css");

  body {
    margin: 0;
    min-width: 320px;
    font-family: "Pretendard", "Apple SD Gothic Neo", "Malgun Gothic",
      sans-serif;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: #ffffff;
  }

  div#__next {
    min-height: 100vh;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <Global styles={globalStyle} />
        <GNB></GNB>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
