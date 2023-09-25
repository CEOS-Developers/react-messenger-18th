import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset};
    *{  
        word-break: keep-all;
        box-sizing: border-box;
    }
    body{
        font-family: "Pretendard";
        background-color: #F5F5F5;  
    }

`;
