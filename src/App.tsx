import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import ChattingRoom from "./pages/ChattingRoom";
import { SenderProvider } from "./assets/SenderContext";

function App() {
  return (
    <SenderProvider>
      <GlobalStyle />
      <ChattingRoom />
    </SenderProvider>
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
