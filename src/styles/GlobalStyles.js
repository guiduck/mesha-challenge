import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  html, body, #root {
    width: 100vw;
    height: 100vh;

    max-width: 100%;
    max-height: 100%;
  }
  html {
    background: var(--primary);
  }
  :root{
    --primary: #85447A;
    --secondary: #9C4880;
    --terciary: #91436A;
    --details: #FFC4FF;
    --text: #FFE8E6;
  }
`