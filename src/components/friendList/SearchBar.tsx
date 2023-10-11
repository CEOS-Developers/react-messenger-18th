import React from "react";
import styled from "styled-components";
import { ReactComponent as Search } from "../../icons/search.svg";
import { debounce } from "lodash";

interface searchProps {
  search: [string, React.Dispatch<React.SetStateAction<string>>];
}

export default function SearchBar({ search }: searchProps) {
  const searchBarChanged = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      search[1](e.target.value);
    },
    500
  );
  return (
    <SearchContainer>
      <span>
        <Search />
      </span>
      <InputWrapper
        placeholder="이름을 검색해보세요."
        onChange={searchBarChanged}
      />
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  position: relative;
  span {
    position: absolute;
    left: 1.6rem;
    top: 0.6rem;
  }
`;

const InputWrapper = styled.input`
  width: 33.5rem;
  height: 3.6rem;
  border: 1px solid ${(props) => props.theme.colors.gray4};
  border-radius: 0.4rem;
  padding: 0.6rem 1.6rem;
  padding-left: 4.4rem;
  ${(props) => props.theme.fontStyles.body2};
  font-size: 1.4rem;
`;
