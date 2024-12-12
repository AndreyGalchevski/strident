import { normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import theme from "../utils/theme";

const GlobalStyles = createGlobalStyle`
  ${normalize}
  html, body {
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  body {
    text-align: center;
    background-color: ${theme.colors.grey};
  }
`;

export default GlobalStyles;
