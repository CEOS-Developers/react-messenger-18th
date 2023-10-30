import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { styled, createGlobalStyle } from "styled-components";

import Chat from "./pages/chat/Chat";
import ChatRoom from "./pages/chatroom/ChatRoom";
import Friend from "./pages/friend/Friend";
import MyPage from "pages/mypage/MyPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <StatusBarImage src="/assets/status_bar.svg" alt="back img" />
        <Container>
          <Routes>
            <Route path="/" element={<Friend />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/chatroom" element={<ChatRoom />} />
          </Routes>
        </Container>
        <HomeImage src="/assets/home.svg" alt="home img" />
      </Wrapper>
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;

const Wrapper = styled.div`
  width: 375px;
  height: 812px;
`;

const Container = styled.div`
  padding-top: 38px;
  padding-bottom: 34px;
`;

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Pretendard-Regular';
    min-height: 100vh;
    margin: 0;
  }

  #root {
    background-color: white;
  }
`;

const StatusBarImage = styled.img`
  position: fixed;
  top: 0;
`;

const HomeImage = styled.img`
  position: fixed;
  bottom: 0;
`;
