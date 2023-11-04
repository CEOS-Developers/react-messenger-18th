import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Chat from "./pages/chat/chat";
import ChatList from "./pages/chatlist/chatList";
import Profile from "./pages/profile/profile";
import Friends from "./pages/friends/friends";
import StatusBar from "./components/StatusBar/statusbar";

import chatData from "./assets/datas/chatdata.json";
import userData from "./assets/datas/userdata.json";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <StatusBar /> */}
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chatlist" element={<ChatList />} />
          <Route path="/chat/:chatId" element={<Chat />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
