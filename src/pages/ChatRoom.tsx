import React from 'react';
import styled from 'styled-components';
import theme from '../style/theme';
import ChatBox from '../components/ChatBox';
import Header from '../components/Header';
import ProfileSmallIcon from '../static/ProfileSmallIcon';
import ChatInputBar from '../components/ChatInputBar';
import { useEffect, useState, useRef } from 'react';

interface UserInfo {
  id: number;
}

const ChatRoom: React.FC<UserInfo> = ({ id }) => {
  const userIdArr: string[] = ['이은비', '윤서윤'];
  const [userId, setUserId] = useState(id);
  const [inputText, setInputText] = useState('');
  const [isInputFocused, setInputFocused] = useState(false);

  const bodyRef = React.useRef<HTMLDivElement | null>(null);

  const initialData = JSON.parse(
    localStorage.getItem('chatData') || '[]'
  ) as any[];
  const [chatData, setChatData] = useState<any[]>(initialData);

  const handleHeaderClick = () => {
    // id를 0과 1 사이에서 토글
    setUserId((prevId) => (prevId === 0 ? 1 : 0));
  };

  // 날짜 형식을 지정하는 함수
  const getCurrentDate = () => {
    const now = new Date();
    // const year = now.getFullYear();
    // const month = String(now.getMonth() + 1).padStart(2, '0');
    // const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  //inputText변동시 chatData추가
  useEffect(() => {
    const currentDate = getCurrentDate();
    if (inputText.trim() !== '') {
      setChatData((prevChatData) => {
        if (prevChatData) {
          return [
            ...prevChatData,
            {
              userId: userId,
              isLike: false,
              chat: inputText,
              time: currentDate,
            },
          ];
        } else {
          return [
            {
              userId: userId,
              isLike: false,
              chat: inputText,
              time: currentDate,
            },
          ];
        }
      });
    }

    // if (isInputFocused && bodyRef.current) {
    //   bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    // }
  }, [inputText]);

  useEffect(() => {
    if (isInputFocused && bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [isInputFocused]);

  // chatData가 업데이트될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('chatData', JSON.stringify(chatData));
  }, [chatData]);

  return (
    <Wrapper>
      <Header text={userIdArr[userId]} onClick={handleHeaderClick} />
      <Body ref={bodyRef}>
        {chatData.map((chatItem) => (
          <ChatBox
            text={chatItem.chat}
            hasTail={false}
            isMe={chatItem.userId === userId}
            time={chatItem.time}
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
  height: 80%;
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

  height: 100%;
`;

export default ChatRoom;
