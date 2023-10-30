import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Chat from "./pages/chat/Chat";
import ChatRoom from "./pages/chatroom/ChatRoom";
import Friend from "./pages/friend/Friend";
import MyPage from "pages/mypage/MyPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>App.js</h1>
        <Routes>
          <Route path="/" element={<Friend />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/chatroom" element={<ChatRoom />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Pretendard-Regular';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
`;
