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

interface ChatData {
  userId: string;
  isLike: boolean;
  chat: string;
  time: string;
}

const ChatRoom = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState<UserData[]>([]);
  useEffect(() => {
    fetch('/data/userData.json')
      .then((res) => res.json())
      .then((result) => {
        setUserData(result);
        console.log(userData);
      });
  }, []);

  return (
    <Wrapper>
      {userData.map((it) => it.id === userId && <div>{it.userName}</div>)}
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
