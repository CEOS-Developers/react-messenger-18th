import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ChatInput from "../../components/ChatInput/chatinput";
import userData from "../../assets/datas/userdata.json";
import chatData from "../../assets/datas/chatdata.json";
import ChatTitle from "../../components/ChatTitle/chatTitle";
import MessageList from "../../components/Message/messageList";
import Message from "../../components/Message/message";
import "../../styles/colors.css";
import bottomBar from "../../assets/images/LightBottomBar.svg";
import StatusBar from "../../components/StatusBar/statusbar";

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

  const [messages, setMessages] = useState<Message[]>(savedChats);
  const [messageId, setMessageId] = useState<number>(chatData.length);
  const [nowUser, setNowUser] = useState(userData.users[0]);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: messageId,
      sender: nowUser.name,
      content,
      showIcon: false,
    };

    // 메세지가 추가됐을 때 가장 마지막 index의 메세지와 비교하여 showIcon 업데이트
    if (
      messages.length > 0 &&
      messages[messages.length - 1].sender !== nowUser.name
    ) {
      messages[messages.length - 1].showIcon = true;
    }

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);

    // 다음 메시지를 위해 messageId 업데이트
    setMessageId(messageId + 1);
    // 로컬 스토리지에 채팅 데이터 저장
    localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
  };

  const changeUser = () => {
    setNowUser((prev) =>
      prev.name === userData.users[0].name
        ? userData.users[1]
        : userData.users[0]
    );

    //사용자 바뀌면, 마지막 상대방 메시지 showIcon 처리해주는 부분
    setMessages((prev) => {
      const lastMessageIndex = prev.length - 1;
      //userChange 동시에 여러번 누르면 아이콘 동시에 뜨는것 방지하기 위해
      if (lastMessageIndex >= 1) {
        if (
          prev[lastMessageIndex - 1].sender === prev[lastMessageIndex].sender &&
          prev[lastMessageIndex - 1].showIcon
        ) {
          prev[lastMessageIndex - 1].showIcon = false;
        }
        prev[lastMessageIndex].showIcon = true;
      }

      return [...prev];
    });
  };

  const partner =
    nowUser.name === userData.users[0].name
      ? userData.users[1]
      : userData.users[0];

  const messageContainers = messages.map((message: Message, index) => {
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
        <StatusBar />
        <ChatTitle
          chatName={partner.name}
          chatID={partner.instagram}
          changeUser={changeUser}
        />

        <MessageContainer>
          <MessageList>{messageContainers}</MessageList>
        </MessageContainer>

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
  position: absolute;
  border-radius: 1.5rem;
  height: 100vh;
  width: 100vw;
  border: solid var(--gray-1);
`;

const MessageContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  /* padding: 2.75rem 0; //Topbar랑 안겹치게
    margin-bottom: 2.5rem; //아래 부분이랑 안겹치게 */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BottomBarIcon = styled.img`
  width: 100%;
  height: 2.125rem;
  margin-bottom: 0;
  position: relative;
`;

export default Chat;
