import React from 'react';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Header from '../components/Header';
import SearchIcon from '../static/SearchIcon';
import SettingIcon from '../static/SettingIcon';
import theme from '../style/theme';
import ProfileIcon from '../static/PropfileIcon';
import { useEffect, useState, useRef } from 'react';
import ProfileBox from '../components/ProfileBox';

interface UserData {
  id: string;
  userName: string;
  comment: string;
}

const FriendList = () => {
  //mock데이터 세팅
  const [userData, setUserData] = useState<UserData[]>([]);

  useEffect(() => {
    fetch('data/userData.json')
      .then((res) => res.json())
      .then((result) => setUserData(result));
  }, []);

  return (
    <Wrapper>
      <MyHeader>
        친구
        <IconList>
          <SearchIcon />
          <SettingIcon fillColor="black" />
        </IconList>
      </MyHeader>

      <Body>
        <MyProfileWrapper>내 프로필</MyProfileWrapper>

        <FriendsWrapper>
          친구
          {userData.map((it) => (
            <ProfileBox userName={it.userName} comment={it.comment} />
          ))}
        </FriendsWrapper>
      </Body>

      <Footer />
    </Wrapper>
  );
};

const FriendsWrapper = styled.div``;
const MyProfile = styled.div``;
const MyProfileWrapper = styled.div``;

const IconList = styled.div`
  display: flex;
  gap: 1rem;
`;

const MyHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-style: ${theme.fonts.heading};

  height: 100%;
  width: 100%;

  background-color: white;
  padding: 1rem;

  margin-bottom: 1px solid ${theme.colors.g2};
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  width: 100%;
  padding: 1rem;
`;

const Body = styled.div`
  height: 80%;
  overflow-y: auto;
  padding: 5px;

  scroll-behavior: smooth;
`;
export default FriendList;
