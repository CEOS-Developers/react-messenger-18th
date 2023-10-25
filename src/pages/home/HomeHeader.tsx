import Services from 'pages/home/Services';
import UserProfile from 'pages/home/UserProfile';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from 'static/images/search-icon.svg';
import { useState } from 'react';
import SearchBar from 'pages/common/SearchBar';

interface HomeHeaderProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const HomeHeader = ({ query, setQuery }: HomeHeaderProps) => {
  const [isStatusMessageSpread, setIsStatusMessageSpread] =
    useState<boolean>(false);

  <SearchBar
    query={query}
    handleOnChange={(e) => {
      setQuery(e.target.value);
    }}
  />;
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
      <StyledSearchBar
        query={query}
        handleOnChange={(e) => {
          setQuery(e.target.value);
        }}
        customStyle="margin: 0 12px;"
      />
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

const StyledSearchBar = styled(SearchBar)`
  margin: 0 12px;
`;

export default HomeHeader;
