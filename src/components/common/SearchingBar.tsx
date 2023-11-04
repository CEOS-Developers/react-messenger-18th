import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { color } from "../../assets/styles/color";

import { useRecoilValue } from "recoil";
import { meAtom } from "../../assets/recoil/recoil";

//img
import back from "../../assets/images/back.svg";
import search from "../../assets/images/search.svg";
import write from "../../assets/images/write.svg";
import share from "../../assets/images/share.svg";

interface SearchingBarProps {
  showSearch: boolean;
  keyword: string;
  setKeyword: (term: string) => void;
}

function SearchingBar({
  showSearch = true,
  keyword,
  setKeyword,
}: SearchingBarProps) {
  const meUser = useRecoilValue(meAtom);

  const { chat_id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const isChatting = location.pathname === "/chatting";

  const handleIconClick = () => {
    if (chat_id) {
      navigate("/chatting");
    } else {
      navigate("/");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TopContainer>
        <Box>
          {showSearch ? (
            <Icon src={back} onClick={handleIconClick} />
          ) : (
            <IconDiv />
          )}
          <UserID>{meUser.userID}</UserID>
        </Box>
        <Box>
          {isChatting ? (
            <Icon src={write} onClick={() => navigate("/chatting")} />
          ) : (
            <Icon src={share} onClick={() => navigate("/chatting")} />
            //새 채팅 만드는 페이지로 이동해야함
          )}
        </Box>
      </TopContainer>
      <SearchingContainer>
        <img src={search} />
        <input
          placeholder="검색"
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        ></input>
      </SearchingContainer>
    </div>
  );
}

export default SearchingBar;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 48px;
  flex-shrink: 0;
  padding: 0 4px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const UserID = styled.div`
  color: ${color.black};

  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;

  margin: 0 12px 0 10px;
`;

const IconDiv = styled.div`
  width: 24px;
  height: 24px;
  margin: 0 12px 0 10px;
`;

const SearchingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 93%;
  height: 6%;
  padding: 6px 4px;
  margin: 6px 0 8px;
  gap: 4px;

  border-radius: 8px;
  background: ${color.grey1};

  input {
    width: 321px;
    border: none;
    outline: none;
    background-color: transparent;

    &::placeholder {
      color: ${color.grey3};

      font-size: 13px;
      font-style: normal;
      font-weight: 500;
      line-height: 130%;
    }
  }
`;
