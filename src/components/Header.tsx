import React from 'react';
import styled from 'styled-components';
import theme from '../style/theme';
import SearchIcon from '../static/SearchIcon';
import HamburgerIcon from '../static/HamburgerIcon';
import BackIcon from '../static/BackIcon';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <Wrapper>
      <Link to="/chatlist">
        <BackIcon />
      </Link>
      {text}
      <IconList>
        <SearchIcon />
        <HamburgerIcon />
      </IconList>
    </Wrapper>
  );
};

const IconList = styled.div`
  display: flex;
  gap: 0.625rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem;

  margin-top: 15px;

  cursor: pointer;
`;

export default Header;
