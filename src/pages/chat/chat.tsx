import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import TopBar from "../../components/TopBar/topbar";
import ChatInput from "../../components/ChatInput/chatinput";
import userData from "../../assets/datas/userdata.json";
import chatData from "../../assets/datas/chatdata.json";
import ChatTitle from "../../components/ChatTitle/chatTitle";
import MessageList from "../../components/Message/messageList";
import Message from "../../components/Message/message";
import "../../styles/colors.css";
import bottomBar from "../../assets/images/LightBottomBar.svg";

interface Message {
  id: number;
  sender: string;
  content: string;
  showIcon: boolean;
}

function Chat() {
  const savedChats = JSON.parse(
    localStorage.getItem("chatMessages") || JSON.stringify(chatData)
  );
  const savedMessageId = JSON.parse(
    localStorage.getItem("currMessageId") || JSON.stringify(chatData.length)
  );
  const [messages, setMessages] = useState<Message[]>(savedChats);
  const [messageId, setMessageId] = useState<number>(savedMessageId);
  const [nowUser, setNowUser] = useState(userData.users[0]);

  const updateMessagesWithShowIcon = (messages: Message[]) => {
    const updatedMessages = [...messages];

    for (let i = 1; i < updatedMessages.length; i++) {
      if (updatedMessages[i - 1].sender !== updatedMessages[i].sender) {
        // 이전 메시지랑 sender가 다른경우 showIcon을 true로 설정
        updatedMessages[i - 1].showIcon = true;
      }
    }

    return updatedMessages;
  };

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: messageId,
      sender: nowUser.name,
      content,
      showIcon: false,
    };

    const updatedMessages = [...messages, newMessage];
    const messagesWithShowIcon = updateMessagesWithShowIcon(updatedMessages);

    setMessages(messagesWithShowIcon);
    // 다음 메시지를 위해 messageId 업데이트
    setMessageId(messageId + 1);
    // 로컬 스토리지에 채팅 데이터 저장
    localStorage.setItem("currMessageId", messageId.toString());
    localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
  };

  const changeUser = () => {
    setNowUser((prev) =>
      prev.name === userData.users[0].name
        ? userData.users[1]
        : userData.users[0]
    );
  };

  const partner =
    nowUser.name === userData.users[0].name
      ? userData.users[1]
      : userData.users[0];

  const messageContainers = messages.map((message: Message) => {
    const isCurrentUser = message.sender === nowUser.name;

    return (
      <Message
        key={message.id}
        sender={message.sender}
        content={message.content}
        nowUser={nowUser.name}
        showIcon={message.showIcon && !isCurrentUser}
      />
    );
  });

  return (
    <div className="pageWrapper">
      <ChatContainer>
        <TopBar />
        <ChatTitle
          chatName={partner.name}
          chatID={partner.instagram}
          changeUser={changeUser}
        />
        <MessageList>{messageContainers}</MessageList>
        <ChatInput onSend={handleSendMessage} />
        <BottomBarIcon src={bottomBar} alt="bottom bar Icon" />
      </ChatContainer>
    </div>
  );
}

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  /* margin-bottom: 1.31rem; */
  position: relative;
`;

const BottomBarIcon = styled.img`
  width: 100%;
  height: 2.125rem;
`;

export default Chat;
