import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import ChattingRoom from "./pages/ChattingRoom";

function App() {
  return (
    <>
      <GlobalStyle />
      <ChattingRoom />
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  
  ${reset}
  *, *::before, *::after{
        box-sizing: border-box;
    }
  body{
    display: flex;
        padding: 0;
        margin: 0;
        justify-content: center;
        font-family: "Pretendard-Regular";
    };
`;
