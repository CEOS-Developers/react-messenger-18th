import React from 'react';
import styled from 'styled-components';
import theme from '../style/theme';
import ChatBox from '../components/ChatBox';
import Header from '../components/Header';
import ProfileSmallIcon from '../static/ProfileSmallIcon';
import ChatInputBar from '../components/ChatInputBar';
import { useEffect, useState } from 'react';

interface UserInfo {
  id: number;
}

const ChatRoom: React.FC<UserInfo> = ({ id }) => {
  const userIdArr: string[] = ['이은비', '윤서윤'];
  const [userId, setUserId] = useState(id);
  const [inputText, setInputText] = useState('');

  const [chatData, setChatData] = useState([
    { userId: 0, isLike: false, chat: '시장에 가면~' },
    { userId: 1, isLike: false, chat: '시장에 가면~ 오렌지도 있고' },
  ]);

  const handleHeaderClick = () => {
    // id를 0과 1 사이에서 토글
    setUserId((prevId) => (prevId === 0 ? 1 : 0));
  };

  // 날짜 형식을 지정하는 함수
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  //inputText변동시 chatData추가
  useEffect(() => {
    const currentDate = new Date();
    setChatData((prevChatData) => [
      ...prevChatData,
      { userId: userId, isLike: false, chat: inputText, date: currentDate },
    ]);

    console.log(chatData);
  }, [inputText]);

  return (
    <Wrapper>
      <Header text={userIdArr[userId]} onClick={handleHeaderClick} />

      <ChatBox text={'배고파요'} hasTail={false} isMe={true} />
      <ChatBox text={'저도요'} hasTail={false} isMe={false} />
      <ChatBox text={'흐엉'} hasTail={false} isMe={false} />

      <ChatInputBar inputText={inputText} setInputText={setInputText} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${theme.colors.white};

  padding-left: 10px;
  padding-right: 10px;

  display: flex;
  flex-direction: column;
`;

export default ChatRoom;
