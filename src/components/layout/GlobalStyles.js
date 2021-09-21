import { createGlobalStyle } from "styled-components";

import backgroundImg from "../../assets/shadowfell.jpg";
import meriendaWoff2 from "../../assets/fonts/Merienda-Regular_0_wt.woff2";
import meriendaWoff from "../../assets/fonts/Merienda-Regular_0_wt.woff";
import meriendaBoldWoff2 from "../../assets/fonts/Merienda-Bold.woff2";
import meriendaBoldWoff from "../../assets/fonts/Merienda-Bold.woff";

const COLORS = {
  main: "#1b1b1b",
  alt: "#c5c5c5",
  purple: "#685A73",
  highlight: "#17315B",
  altHighlight: "#375CA6"
}

//This theme is used in Layout.js to disperse the theme throughout the app
export const theme = {
  colors: COLORS,
  getMainColorA: (alpha) => {
    return `rgba(28,28,31, ${alpha})`;
  },
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Merienda';
    src: url(${meriendaWoff2}) format('woff2'),
         url(${meriendaWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Merienda';
    src: url(${meriendaBoldWoff2}) format('woff2'),
        url(${meriendaBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
  }
  ::placeholder {
    color: #c5c5c5;
  }
  html {
    --color-text: #c5c5c5;
    --color-main: #1b1b1b;
    --color-purple: #685A73;
  }


  * {
    box-sizing: border-box;
    margin: 0;
  }
  body {
    font-family: 'Merienda', cursive;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(48, 61, 68, 1) 1000px, rgba(48, 61, 68, 1) 100%), url(${backgroundImg}) no-repeat;
    @media (max-width: 1024px) {
      
    }
  }
`;

export default GlobalStyle;
