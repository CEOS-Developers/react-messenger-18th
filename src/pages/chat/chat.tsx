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

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: messageId,
      sender: nowUser.name,
      content,
      showIcon: false,
    };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
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

    // 채팅 데이터를 불러온 후 showIcon을 변경하고 다시 저장

    // const updatedMessages = messages.map((message) => {
    //   if (message.sender !== nowUser.name) {
    //     // 현재 사용자가 아닌 경우 showIcon을 true로 설정
    //     return { ...message, showIcon: true };
    //   }
    //   return message;
    // });

    // 로컬 스토리지에 채팅 데이터 저장
    // localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
  };

  const partner =
    nowUser.name === userData.users[0].name
      ? userData.users[1]
      : userData.users[0];

  const messageContainers = messages.map((message: Message) => {
    return (
      <Message
        key={message.id}
        sender={message.sender}
        content={message.content}
        nowUser={nowUser.name}
        showIcon={message.showIcon}
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
