import React from "react";
import "./App.css";
import { styled, createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatRoom from "Pages/ChatRoom/ChatRoom";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/chatroom" element={<ChatRoom />} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
   html, body, #root{
     height: 100%;
     margin: 0;
     padding: 0;
   }`;

const Wrapper = styled.div`
  height: 100%;
  width: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
