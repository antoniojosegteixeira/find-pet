import { createGlobalStyle } from "styled-components";
import "./index.css";

export default createGlobalStyle`
  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
  }
  * {
    box-sizing: border-box;
  }
`;
