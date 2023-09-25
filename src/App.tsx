import { Route, Routes } from 'react-router-dom';
import Home from 'pages/home/Home';
import Profile from 'pages/profile/Profile';
import Chat from 'pages/chat/Chat';
import Room from 'pages/room/Room';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/chat/:id" element={<Room />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
