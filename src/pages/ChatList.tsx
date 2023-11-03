import React from 'react';
import theme from '../style/theme';
import Footer from '../components/Footer';
import styled from 'styled-components';
import SearchIcon from '../static/SearchIcon';
import ChatIcon from '../static/ChatIcon';
import SettingIcon from '../static/SettingIcon';
import ChatPlusIcon from '../static/ChatPlusIcon';
import { useEffect, useState, useRef } from 'react';
import ChatListBox from '../components/ChatListBox';

interface ChatData {
  userId: number;
  userName: string;
  latestMent: string;
  newNum: number;
  latestTime: string;
}

const ChatList = () => {
  const [chatData, setChatData] = useState<ChatData[]>([]);

  useEffect(() => {
    fetch('data/chatListData.json')
      .then((res) => res.json())
      .then((result) => setChatData(result));
  }, []);

  return (
    <Wrapper>
      <MyHeader>
        채팅
        <IconList>
          <SearchIcon />
          <ChatPlusIcon fillColor="black" />
          <SettingIcon fillColor="black" />
        </IconList>
      </MyHeader>
      <Body>
        {chatData.map((it) => (
          <ChatListBox
            userId={it.userId}
            userName={it.userName}
            latestTime={it.latestTime}
            comment={it.latestMent}
            newNum={it.newNum}
          />
        ))}
      </Body>
      <Footer />
    </Wrapper>
  );
};

const IconList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const MyHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-style: ${theme.fonts.heading};

  height: 7%;
  width: 100%;

  padding-left: 2rem;
  padding-right: 1rem;

  border-bottom: 2px solid ${theme.colors.g2};
`;

const Body = styled.div`
  height: 80%;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 100vh;
  width: 100%;
`;
export default ChatList;
