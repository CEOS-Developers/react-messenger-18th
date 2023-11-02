import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import ChattingRoom from "./pages/ChattingRoom";
import ChattingListPage from "./pages/ChattingListPage";
import FriendsListPage from "./pages/FriendsListPage";
import ProfilePage from "./pages/ProfilePage";

//context
import { SenderProvider } from "./assets/SenderContext";

function App() {
  return (
    <SenderProvider>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path={"/"} element={<FriendsListPage />}></Route>
          <Route path={"/chatting"} element={<ChattingListPage />}></Route>
          <Route path={"/chatting/:chat_id"} element={<ChattingRoom />}></Route>
          <Route path={"/profile/:user_id"} element={<ProfilePage />}></Route>
        </Routes>
      </Router>
    </SenderProvider>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  
  ${reset}
  *, *::before, *::after{
        box-sizing: border-box;
    }
  body{
    display: flex;
        padding: 0;
        margin: 0;
        justify-content: center;
        font-family: "Pretendard-Regular";

        background-color: #E2E2e2;
    };
`;
