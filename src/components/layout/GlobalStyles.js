import { createGlobalStyle } from "styled-components";

import backgroundImg from "../../assets/shadowfell.jpg";
import backgroundImgMobile from "../../assets/space_mobile.png";
import meriendaWoff2 from "../../assets/fonts/Merienda-Regular_0_wt.woff2"
import meriendaWoff from "../../assets/fonts/Merienda-Regular_0_wt.woff"

export const theme = {
  mainColor: "#1f0431",
  altColor: "#dedee7",
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
  }
  * {
    box-sizing: border-box;
    margin: 0;
  }
  body {
    font-family: 'Merienda', cursive;
    margin: 0;
    background-image: url(${backgroundImg});
    background-size: 100% 100%;

    @media (max-width: 1024px) {
      background-image: url(${backgroundImgMobile});
    }
  }
`;

export default GlobalStyle;
