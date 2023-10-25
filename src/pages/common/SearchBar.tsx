import { ReactComponent as SearchIcon } from 'static/images/search-icon.svg';
import styled from 'styled-components';

interface SearchBarProps {
  query: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customStyle?: string;
}

const SearchBar = ({ query, handleOnChange, customStyle }: SearchBarProps) => {
  return (
    <SearchBarContainer $style={customStyle}>
      <SearchIcon />
      <SearchBarInput
        placeholder="Search"
        value={query}
        onChange={handleOnChange}
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
