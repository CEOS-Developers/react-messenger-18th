// searchIcon & recording

import styled from "styled-components";
import { ChangeEvent } from "react";
import searchIcon from "../../assets/images/SearchIcon.svg";
import recordIcon from "../../assets/images/record.svg";

interface SearchBarProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <InputContainer>
      <Input
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
      <Search src={searchIcon} />
      <Record src={recordIcon} />
    </InputContainer>
  );
};

const InputContainer = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  /* height: 2.25rem; */
  padding: 0 1rem;
  font-family: "SF Pro Text";
`;
const Input = styled.input`
  width: 100%;
  font-family: "SF Pro Text";
  height: 2.25rem;
  padding-left: 2.87rem;
  background: var(--gray-2);
  &:focus {
    box-shadow: none;
  }
  outline: none;
  border: none;
  border-radius: 0.5rem;
`;

const Search = styled.img`
  position: absolute;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.017rem;
  left: 1.5rem;
`;

const Record = styled.img`
  position: absolute;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.017rem;
  right: 1.63rem;
`;
export default SearchBar;
