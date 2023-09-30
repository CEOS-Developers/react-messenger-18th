import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "../styles/colors.css"
const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing:border-box;
        padding: 0;
        margin: 0;
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
        justify-content: center;
        height:100vh;
        width:100vw;

    }
`;

export default GlobalStyle;