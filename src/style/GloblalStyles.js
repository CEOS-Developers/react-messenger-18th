import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset};
    *{
        background-color: yellow; 
        word-break: keep-all;
        box-sizing: border-box;
    }
    body{
        font-family: "Pretendard";
        font-family: Lato";
    }

`;
