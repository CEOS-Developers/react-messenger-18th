import styled from "styled-components";
import TopBar from "../../components/TopBar/topbar";
import ChatInput from "../../components/ChatInput/chatinput";

import { useState } from "react";

function Chat() {
  const [newchat, setNewchat] = useState("");

  return (
    <div className="pageWrapper">
      <ChatContainer>
        <TopBar />
        <ChatInput onSend={(message) => console.log(message)} />
      </ChatContainer>
    </div>
  );
}

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export default Chat;
