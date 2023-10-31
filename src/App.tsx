import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PhoneFrame from "@common/components/layout/PhoneFrame/PhoneFrame";
import ChatList from "@pages/ChatList";
import FriendsList from "@pages/FriendsList";
import MyProfile from "@pages/MyProfile";
import ChatRoom from "@pages/ChatRoom";
import { CHATROOM_TYPE } from "@common/constants/chatroom-type";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PhoneFrame />}>
          <Route path="/" element={<ChatList />} />
          <Route path="/friends-list" element={<FriendsList />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route
            path={`/chatroom/${CHATROOM_TYPE.MAIN}/:id`}
            element={<ChatRoom />}
          />
          <Route
            path={`/chatroom/${CHATROOM_TYPE.SUB}/:id`}
            element={<ChatRoom />}
          />
          <Route
            path={`/chatroom/${CHATROOM_TYPE.FRIEND}/:id`}
            element={<ChatRoom />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
