import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Rajdhani', sans-serif;
    font-size: 24px;
    color: #f8f8f8;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background: #18181B;
  }
  *,*::before,*::after{ 
    box-sizing:border-box; 
    margin: 0;
    padding: 0;
  }

`;

export default GlobalStyle;
