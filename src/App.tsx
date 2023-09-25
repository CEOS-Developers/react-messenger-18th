import { Route, Routes } from 'react-router-dom';
import Home from 'pages/home/Home';
import Profile from 'pages/profile/Profile';
import Chat from 'pages/chat/Chat';
import ChatRoom from 'pages/chatRoom/ChatRoom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/chat/:id" element={<ChatRoom />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
