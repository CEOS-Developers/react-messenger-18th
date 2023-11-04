import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "../styles/colors.css"
const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing:border-box;
        padding: 0;
        margin: 0;
        font-family: "SF Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

    }
    html,body{
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .pageWrapper{
        margin: 0;
        padding:0;
        display: flex;
        flex-direction:column;
        justify-content: center;
        height:100vh;
        width:100vw;

    }
    :hover {
    cursor: pointer;
  } 

    
`;

export default GlobalStyle;