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
        <MyProfileWrapper>
          <SubTitle>내 프로필</SubTitle>

          {userData.map(
            (it, index) =>
              index === 0 && (
                <ProfileBox userName={it.userName} comment={it.comment} />
              )
          )}
        </MyProfileWrapper>
        <FriendsWrapper>
          <SubTitle>친구 {userData.length - 1}</SubTitle>
          {userData.map(
            (it, index) =>
              index > 0 && (
                <ProfileBox userName={it.userName} comment={it.comment} />
              )
          )}
        </FriendsWrapper>
      </Body>

      <Footer />
    </Wrapper>
  );
};

const MyProfile = styled.div``;
const MyProfileWrapper = styled.div``;

const SubTitle = styled.div`
  font-style: ${theme.fonts.caption1};
  padding-left: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const FriendsWrapper = styled.div`
  width: 100%;
  border-top: 1px solid ${theme.colors.g2};
`;

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

  height: 7%;
  width: 100%;

  padding-left: 2rem;
  padding-right: 1rem;

  border-bottom: 2px solid ${theme.colors.g2};
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 100vh;
  width: 100%;
`;

const Body = styled.div`
  height: 80%;
  width: 100%;
`;
export default FriendList;
