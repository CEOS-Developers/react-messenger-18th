import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
${normalize}
::-webkit-scrollbar {
   display: none;
}

html {
   font-size: 10px;
   box-sizing: border-box;
   font-family: 'Pretendard', sans-serif;
}

body {
   height: 100vh;
   display: flex;
   -webkit-box-align: center;
   align-items: center;
   -webkit-box-pack: center;
   justify-content: center;
   margin: 0px;
 
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   @keyframes skeleton-gradient {
    0% {
      background-color: #e5e6eb;
    }
    50% {
      background-color: #e5e6eb;
    }
    100% {
      background-color: #e5e6eb;
    }
  }
 }

 #root{
  background-color: #e5e6eb;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
 }

 .App {
  width: 37.5rem;
  height: 81.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
 }
 
 code {
   font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
     monospace;
 }

button{
   width: auto;
   background: none;
   border: none;
   cursor: pointer;
   &:focus{
      outline: none;
   }
}

@font-face {
  font-family: "Pretendard";
  font-weight: 100 900;
  src: local("Pretendard"),
    url("/fonts/pretendard/variable/PretendardVariable.ttf") format("truetype");
}
`;
