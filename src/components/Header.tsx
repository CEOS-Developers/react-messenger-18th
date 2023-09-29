import React from 'react';
import styled from 'styled-components';
import theme from '../style/theme';
import SearchIcon from '../static/SearchIcon';
import HamburgerIcon from '../static/HamburgerIcon';
import BackIcon from '../static/BackIcon';

interface HeaderProps {
  text: string;
  onClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ text, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <BackIcon />
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
