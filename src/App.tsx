import ChatRoom from './pages/ChatRoom';
import ChatList from './pages/ChatList';
import MyPage from './pages/MyPage';
import FriendList from './pages/FriendList';
import React from 'react';
import styled from 'styled-components';
import theme from './style/theme';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FriendList />} />
      <Route path="/chatlist" element={<ChatList />} />
      {/* <Route path="/chatroom/:cid" element={<ChatRoom />} /> */}
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
}

const Box = styled.div`
  width: 23.4375rem;
  height: 50.75rem;
  border-radius: 1rem;
  background: var(--white, #fff);
`;

// const Wrapper = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
// `;

export default App;
