import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useMessageStore } from 'stores/messageStore';
import { useUserStore } from 'stores/userStore';
import Home from 'pages/home/Home';
import Profile from 'pages/profile/Profile';
import Chat from 'pages/chat/Chat';
import ChatRoom from 'pages/chatRoom/ChatRoom';
import Layout from 'pages/common/Layout';

function App() {
  const messages = useMessageStore((state) => state.messages);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem(`user_${user.id}`, JSON.stringify(user));
  }, [user]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="chat" element={<Chat />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="/chat/:id" element={<ChatRoom />} />
    </Routes>
  );
}

export default App;
