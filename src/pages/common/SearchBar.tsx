import { ReactComponent as SearchIcon } from 'static/images/search-icon.svg';
import styled from 'styled-components';

interface SearchBarProps {
  query: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customStyle?: string;
}

// 홈, 채팅목록, 새로운 채팅 페이지에서의 search bar
const SearchBar = ({ query, handleChange, customStyle }: SearchBarProps) => {
  return (
    <SearchBarContainer $style={customStyle}>
      <SearchIcon />
      <SearchBarInput
        placeholder="Search"
        value={query}
        onChange={handleChange}
      />
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.div<{ $style: string | undefined }>`
  ${(props) => props.$style}
  height: 32px;
  border-radius: 4px;
  background: var(--Gray-1);
  display: flex;
  align-items: center;
  padding: 0 12px;
`;

const SearchBarInput = styled.input`
  font-size: 12px;
  font-style: normal;
  width: 100%;
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
export default SearchBar;
