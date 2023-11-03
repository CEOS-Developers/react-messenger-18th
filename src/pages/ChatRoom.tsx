import React from 'react';
import styled from 'styled-components';
import theme from '../style/theme';
import ChatBox from '../components/ChatBox';
import Header from '../components/Header';
import ProfileSmallIcon from '../static/ProfileSmallIcon';
import ChatInputBar from '../components/ChatInputBar';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

interface UserData {
  id: string;
  userName: string;
  comment: string;
}

interface ChatList {
  userId: number;
  chatData: Array<ChatData>;
}

interface ChatData {
  userId: number;
  isLike: boolean;
  chat: string;
  time: string;
}

const ChatRoom = () => {
  const { userId } = useParams();
  const [userName, setUserName] = useState('');

  const [inputText, setInputText] = useState('');
  const [isInputFocused, setInputFocused] = useState(false);

  const bodyRef = React.useRef<HTMLDivElement | null>(null);

  const [userData, setUserData] = useState<UserData[]>([]);
  useEffect(() => {
    fetch('/data/userData.json')
      .then((res) => res.json())
      .then((result) => {
        setUserData(result);
      });
  }, []);

  useEffect(() => {
    const user = userData.find((item) => String(item.id) === userId);
    if (user) {
      setUserName(user.userName);
    }
  }, [userData]);

  const [chatData, setChatData] = useState<ChatData[]>([]);
  const [chatList, setChatList] = useState<ChatList[]>([]);
  useEffect(() => {
    fetch('/data/chatData.json')
      .then((res) => res.json())
      .then((result) => {
        setChatList(result);
      });
  }, []);

  useEffect(() => {
    const matchedData = chatList.find(
      (item) => String(item.userId) === userId
    )?.chatData;
    if (matchedData) {
      setChatData(matchedData);
    }
  }, [chatList]);

  // 날짜 형식을 지정하는 함수
  const getCurrentDate = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  //inputText변동시 chatData추가
  useEffect(() => {
    const currentDate = getCurrentDate();
    if (inputText.trim() !== '') {
      const newItem: ChatData = {
        userId: 0,
        isLike: false,
        chat: inputText,
        time: currentDate,
      };
      const updatedChatData = [...chatData, newItem];
      setChatData(updatedChatData);
      console.log(updatedChatData);
    }
  }, [inputText]);

  useEffect(() => {
    if (isInputFocused && bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [isInputFocused]);

  return (
    <Wrapper>
      <Header text={userName} />
      <Body ref={bodyRef}>
        {chatData.map((chatItem) => (
          <ChatBox
            text={chatItem.chat}
            hasTail={false}
            isMe={!chatItem.userId}
            time={chatItem.time}
            isFirst={true}
            user={userName}
          />
        ))}
      </Body>
      <ChatInputBar
        inputText={inputText}
        setInputText={setInputText}
        isInputFocused={isInputFocused}
        setInputFocused={setInputFocused}
      />
    </Wrapper>
  );
};

const Body = styled.div`
  height: 75%;
  overflow-y: auto;
  padding: 5px;

  scroll-behavior: smooth;
`;

const Wrapper = styled.div`
  background-color: ${theme.colors.white};

  padding-left: 10px;
  padding-right: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100vh;
`;

export default ChatRoom;
