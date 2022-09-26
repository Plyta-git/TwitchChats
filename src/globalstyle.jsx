import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Rajdhani', sans-serif;
    font-size: 24px;
    color: #f8f8f8;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background: linear-gradient(107.56deg, #282934 0%, #05060E 100%);
  }
  *,*::before,*::after{ 
    box-sizing:border-box; 
    margin: 0;
    padding: 0;
  }

`;

export default GlobalStyle;
