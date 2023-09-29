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
        /* align-items: center; */
        justify-content: center;
        width: 23.4375rem;
        height: 50.75rem;
        border-radius:1.5rem;
        border: solid var(--gray-1); //나중에 없애도됨
    }
`;

export default GlobalStyle;