import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../style/theme';
import FriendsIcon from '../static/FriendsIcon';
import ChatIcon from '../static/ChatIcon';
import MyPageIcon from '../static/MyPageIcon';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  return (
    <Wrapper>
      <Link to="/">
        <FriendsIcon
          fillColor={location.pathname === '/' ? '#9747ff' : '#d9d9d9'}
        />
      </Link>
      <Link to="/chatlist">
        <ChatIcon
          fillColor={location.pathname === '/chatlist' ? '#9747ff' : '#d9d9d9'}
        />
      </Link>
      <Link to="/mypage">
        <MyPageIcon
          fillColor={location.pathname === '/mypage' ? '#9747ff' : '#d9d9d9'}
        />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  margin-top: 1px solid ${theme.colors.g2};
`;

export default Footer;
