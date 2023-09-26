import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhoneLayout from "./components/iPhone/PhoneLayout";
import ChatList from "./pages/ChatList";
import FriendsList from "./pages/FriendsList";
import MyProfile from "./pages/MyProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PhoneLayout />}>
          <Route path="/" element={<ChatList />} />
          <Route path="/friends-list" element={<FriendsList />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
