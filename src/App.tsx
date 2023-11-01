import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useMessageStore } from 'stores/messageStore';
import { useUserStore } from 'stores/userStore';
import Home from 'pages/home/Home';
import Profile from 'pages/profile/Profile';
import ChatList from 'pages/chat/ChatList';
import ChatRoom from 'pages/chatRoom/ChatRoom';
import NewChat from 'pages/newChat/NewChat';
import Layout from 'pages/common/Layout';
import { BackgroundColor, ChatRoomBackgroundColor } from 'styles/global.style';

function App() {
  const messages = useMessageStore((state) => state.messages);
  const user = useUserStore((state) => state.user);
  const location = useLocation();

  // localStorage에 저장되어 있는 데이터 버전이 일치하지 않을 때 초기화
  useEffect(() => {
    const storedVersion = localStorage.getItem('version');
    if (!storedVersion || storedVersion < process.env.REACT_APP_VERSION!) {
      localStorage.clear();
      localStorage.setItem('version', process.env.REACT_APP_VERSION!);
      // return;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem(`user`, JSON.stringify(user));
    localStorage.setItem(`user_${user.id}`, JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    // 모바일로 접속시 페이지 최상단 부분 색상 적용
    if (/\/chat\//.test(location.pathname))
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute('content', ChatRoomBackgroundColor);
    else
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute('content', BackgroundColor);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="chat" element={<ChatList />} />
      </Route>
      <Route path="profile" element={<Profile />} />
      <Route path="/chat/:id" element={<ChatRoom />} />
      <Route path="/new-chat" element={<NewChat />} />
    </Routes>
  );
}

export default App;
