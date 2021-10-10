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
  *, button, input {
    background: none;
    border: 0;
    border-radius: 14px;
  }

  html {
    background: var(--primary);
    color: var(--text);
  }
  :root{
    --primary: #85447A;
    --secondary: #9C4880;
    --terciary: #91436A;
    --details: #FFC4FF;
    --text: #FFE8E6;
  }
`;