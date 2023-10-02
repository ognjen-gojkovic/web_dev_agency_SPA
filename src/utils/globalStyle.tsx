import { css, createGlobalStyle } from "styled-components";

const Reset = css`
  // variables
  :root {
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
`;
const BaseStyle = createGlobalStyle`
    ${Reset}

`;
export const GlobalStyle = () => <BaseStyle />;
