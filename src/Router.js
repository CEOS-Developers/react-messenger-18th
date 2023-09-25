import React from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import { Navigate } from "react-router-dom";
// 라우팅은 여기에
function Router() {
  return (
    <>
      <Routes>
        <Route path="/chat" element={<Chat />}></Route>
        {/* 지금은 chat페이지로만 라우팅, 후에 페이지 추가 */}
        <Route path="/*" element={<Navigate to="/chat" />} />

       
      </Routes>
    </>
  );
}

export default Router;
