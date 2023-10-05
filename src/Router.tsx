import React from "react";
import { Route, Routes } from "react-router-dom";
import ChatRoom from "./pages/ChatRoom";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import { Navigate } from "react-router-dom";
// 라우팅은 여기에
function Router() {
  return (
    <>
      <Routes>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/chat" element={<Chat/>}></Route>
        <Route path="/chat/:roomID" element={<ChatRoom />}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        {/* 다른 경로 접속시 chat으로 이동*/}
        <Route path="/*" element={<Navigate to="/chat" />} />
      </Routes>
    </>
  );
}

export default Router;
