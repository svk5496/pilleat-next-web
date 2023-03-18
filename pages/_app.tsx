// pages/_app.tsx
import GNB from "@/components/molecules/bars/GlobalNavigationBar";
import { css, Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { reset } from "./../styles/reset";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          ${reset}
        `}
      />
      <GNB></GNB>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
