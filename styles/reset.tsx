import { css } from "@emotion/react";

export const reset = css`
  html,
  body {
    margin: 0;
    background: white;
    font-family: Arial, Helvetica, sans-serif;
    width: 100vw;
    height: calc(100vh - calc(100vh - 100%));
    padding: inherit;
  }
`;
