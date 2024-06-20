import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    font-family: "Pretendard";
  }

  html, body {
    font-size: 62.5%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }


  button {
    border: none;
    padding: unset;
    background-color: unset;
    cursor: pointer;
  }

  ul{
    padding: unset;
  }


`;

export default GlobalStyles;
