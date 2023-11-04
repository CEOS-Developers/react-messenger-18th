import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { styled, createGlobalStyle } from "styled-components";

import Chat from "./pages/chat/Chat";
import ChatRoom from "./pages/chatroom/ChatRoom";
import Friend from "./pages/friend/Friend";
import MyPage from "pages/mypage/MyPage";
import ChatSearch from "pages/chat/ChatSearch";
import FriendSearch from "pages/friend/FriendSearch";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <StatusBarImage src="/assets/status_bar.svg" alt="back img" />
        <Container>
          <Routes>
            <Route path="/" element={<Friend />} />
            <Route path="/friendsearch" element={<FriendSearch />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/chatsearch" element={<ChatSearch />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/chatroom/:chatId" element={<ChatRoom />} />
          </Routes>
        </Container>
        <HomeImage src="/assets/home.svg" alt="home img" />
      </Wrapper>
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;

const Wrapper = styled.div``;

const Container = styled.div``;

export const GlobalStyles = createGlobalStyle`
  *::-webkit-scrollbar {
    width: 0;
  }
  body {
    background-color: #f6f6f6;
    font-family: "Pretendard-Regular";
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  #root {
    background-color: white;
  }
`;

const StatusBarImage = styled.img``;

const HomeImage = styled.img``;
