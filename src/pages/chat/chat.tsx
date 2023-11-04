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
import { useParams } from "react-router-dom";
interface Message {
  id: number;
  sender: string;
  content: string;
  showIcon: boolean;
  timestamp: Date; // message list 페이지에 시간 추가 필요헤서 필드 추가
}

interface ChatData {
  [key: string]: Message[];
}

function Chat() {
  // URL에서 채팅 ID를 추출, 예: /chat/1
  const { chatId } = useParams<{ chatId: string }>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageId, setMessageId] = useState<number>(0);
  const [nowUser, setNowUser] = useState(userData.users[0]);

  useEffect(() => {
    if (typeof chatId !== "undefined") {
      const savedChats = JSON.parse(
        localStorage.getItem("chatMessages") || JSON.stringify(chatData)
      ) as ChatData;
      setMessages(savedChats[chatId] || []);
      setMessageId(savedChats[chatId]?.length || 0);
    }
  }, [chatId]);

  // 사용자가 바뀔 때마다 실행
  useEffect(() => {
    setMessages((prevMessages) => {
      const newMessages = [...prevMessages];
      const lastMessageIndex = newMessages.length - 1;

      if (lastMessageIndex >= 0) {
        // 모든 메시지를 순회하며 showIcon을 설정
        for (let i = 0; i < lastMessageIndex; i++) {
          const currentSender = newMessages[i].sender;
          const nextSender = newMessages[i + 1].sender;
          newMessages[i].showIcon = currentSender !== nextSender;
        }
        // 마지막 메시지는 항상 showIcon을 true 로 설정
        newMessages[lastMessageIndex].showIcon = true;
      }

      return newMessages;
    });
  }, [nowUser]);

  if (!chatId) {
    return <div>없는 친구 ID입니다.</div>;
  }

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: messageId,
      sender: nowUser.name,
      content,
      showIcon: false,
      timestamp: new Date(), // 현재 시간 추가
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
    const savedChats = JSON.parse(
      localStorage.getItem("chatMessages") || JSON.stringify(chatData)
    ) as ChatData;

    savedChats[chatId] = updatedMessages;
    localStorage.setItem("chatMessages", JSON.stringify(savedChats));
  };
  const changeUser = () => {
    setNowUser((prev) =>
      prev.name === userData.users[0].name
        ? userData.users[chatIdNumber - 1]
        : userData.users[0]
    );

    setMessages((prevMessages) => {
      const newMessages = [...prevMessages];
      const lastMessageIndex = newMessages.length - 1;
      //userChange 동시에 여러번 누르면 아이콘 동시에 뜨는것 방지하기 위해
      if (lastMessageIndex >= 1) {
        const lastMessageSender = newMessages[lastMessageIndex].sender;
        const secondLastMessageSender =
          newMessages[lastMessageIndex - 1].sender;

        // 직전 메시지와 비교하여 showIcon을 설정합니다.
        if (
          secondLastMessageSender === lastMessageSender &&
          newMessages[lastMessageIndex - 1].showIcon
        ) {
          newMessages[lastMessageIndex - 1].showIcon = false;
        }
        newMessages[lastMessageIndex].showIcon = true;
      }

      return newMessages;
    });
  };

  //chatId를 integer 값으로 바꿔준 결과
  const chatIdNumber = +chatId;
  const partner =
    nowUser.name === userData.users[0].name
      ? userData.users[chatIdNumber - 1]
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
