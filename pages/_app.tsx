// pages/_app.tsx
import { client } from "@/apollo";
import { css, Global, Theme, ThemeProvider } from "@emotion/react";
import type { AppContext, AppInitialProps, AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import Layout from "@/components/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { darkTheme, lightTheme, theme } from "@/core/theme";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { createContext, useState } from "react";
config.autoAddCss = false;

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
  h1 {
    font-weight: 500;
  }
  h2 {
    font-weight: 500;
  }
  h3 {
    font-weight: 500;
  }
  h4 {
    font-weight: 500;
  }
  h5 {
    font-weight: 500;
  }
  h6 {
    font-weight: 500;
  }

  p {
    color: ${theme.lightTheme.fontColor};
    margin: 0;
  }

  div#__next {
    min-height: 100vh;
  }
`;

function Strengthenly({ Component, pageProps }: AppProps) {
  console.log(pageProps);
  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyle} />
      <Layout
        mode={pageProps.category}
        menu={pageProps.menu}
        currentPage={pageProps.pageInfo}
      >
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

Strengthenly.getInitialProps = async ({
  Component,
  ctx,
}: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};
  const pathname = ctx.pathname;
  const cookie = ctx.req?.headers.cookie;
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps = {
    ...pageProps,
    pathname,
    cookie,
  };

  return { pageProps };
};

export default Strengthenly;
