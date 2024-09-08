import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
/* @font-face { */
    /* font-family: 'Lato'; */
    /* src: url('./src/assets/fonts/Lato-Regular.ttf')  */
    /* url('./src/assets/fonts/Lato-Bold.ttf')  */
    /* url('./src/assets/fonts/Lato-Italic.ttf'); */
    /* font-weight: 400 700;  */
    /* font-style: normal italic; */
/* } */

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    // font-family: "objektiv-mk1", sans-serif;
  font-family: "Hind Guntur", sans-serif;
  font-weight: 500;
  font-style: normal;
    font-size: 16px;
}

body {
    overflow-x: hidden;
}
`;
