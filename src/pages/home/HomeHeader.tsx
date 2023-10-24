import Services from 'pages/home/Services';
import UserProfile from 'pages/home/UserProfile';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from 'static/images/search-icon.svg';
import { useState } from 'react';

interface HomeHeaderProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const HomeHeader = ({ query, setQuery }: HomeHeaderProps) => {
  const [isStatusMessageSpread, setIsStatusMessageSpread] =
    useState<boolean>(false);

  return (
    <HomeHeaderContainer $isStatusMessageSpread={isStatusMessageSpread}>
      <UserProfile
        isStatusMessageSpread={isStatusMessageSpread}
        spreadStatusMessage={() => {
          setIsStatusMessageSpread(true);
        }}
        foldStatusMessage={() => {
          setIsStatusMessageSpread(false);
        }}
      />
      <UserListSearchInputContainer>
        <SearchIcon />
        <UserListSearchInput
          placeholder="Search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </UserListSearchInputContainer>
      <Services />
    </HomeHeaderContainer>
  );
};

const HomeHeaderContainer = styled.div<{
  $isStatusMessageSpread: boolean;
}>`
  margin-top: 26px;
  margin-top: ${(props) => (props.$isStatusMessageSpread ? '102px' : '26px')};
`;

const UserListSearchInputContainer = styled.div`
  height: 32px;
  border-radius: 4px;
  background: var(--Gray-1);
  display: flex;
  align-items: center;
  margin: 0 12px;
  padding: 0 12px;
`;

const UserListSearchInput = styled.input`
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 120%;
  color: var(--Gray-2);
  border: none;
  background: transparent;
  margin-left: 10px;

  &::placeholder {
    color: var(--Gray-2);
  }
`;
export default HomeHeader;
