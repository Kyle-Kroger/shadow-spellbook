import { createGlobalStyle } from "styled-components";

import backgroundImg from "../../assets/shadowfell.jpg";
import backgroundImgMobile from "../../assets/space_mobile.png";

import meriendaWoff2 from "../../assets/fonts/Merienda-Regular_0_wt.woff2";
import meriendaWoff from "../../assets/fonts/Merienda-Regular_0_wt.woff";
import meriendaBoldWoff2 from "../../assets/fonts/Merienda-Bold.woff2";
import meriendaBoldWoff from "../../assets/fonts/Merienda-Bold.woff";

export const theme = {
  mainColor: "#1b1b1b",
  altColor: "#c5c5c5",
  purple: "#1f0431",
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


  * {
    box-sizing: border-box;
    margin: 0;
  }
  body {
    font-family: 'Merienda', cursive;
    background-image: url(${backgroundImg});
    background-size: 100% 100%;

    @media (max-width: 1024px) {
      background-image: url(${backgroundImgMobile});
    }
  }
`;

export default GlobalStyle;
