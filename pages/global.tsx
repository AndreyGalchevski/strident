import { normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";

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
    /* overflow-y: hidden; */
    font-family: "Special Elite", cursive;
    text-align: center;
    background-image: url(https://res.cloudinary.com/dqvimfd8b/image/upload/o_80/v1570734567/strident/static/background.jpg);
    background-image: url(https://res.cloudinary.com/dqvimfd8b/image/upload/o_80/v1571164112/strident/static/background_ng.webp);
    background-size: cover;
    background-position: center;
    background-repeat: repeat;
    height: 100vh;
  }

  .image-gallery-right-nav, .image-gallery-left-nav, .image-gallery-play-button, .image-gallery-fullscreen-button {
    background-color: transparent !important;
  }
`;

export default GlobalStyles;
