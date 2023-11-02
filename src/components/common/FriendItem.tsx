import React, { useState } from "react";
import styled from "styled-components";
import { color } from "../../assets/styles/color";

//img
import check from "../../assets/images/check.svg";
import checked from "../../assets/images/checked.svg";

const FriendItem = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  // 검색 페이지일 때만 체크 표시 뜨게 하는 state
  const handleToggleCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <Box onClick={handleToggleCheck}>
      <UserImg />
      <UserInfo>
        <div className="UserName">이름</div>
        <span className="ChattingInfo">인스타그램 아이디</span>
      </UserInfo>
      {isSearching ? <CameraIcon src={isChecked ? checked : check} /> : <></>}
    </Box>
  );
};

export default FriendItem;

const Box = styled.div`
  display: flex;
  width: 375px;
  height: 54px;
  padding: 0px 12px;
  justify-content: center;
  align-items: center;

  padding: 0 12px;
  gap: 8px;
`;

const UserImg = styled.img`
  display: flex;
  width: 54px;
  height: 54px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 50%;
  border: 0.7px solid rgba(252, 252, 252, 0.3);
`;

const UserInfo = styled.div`
  display: flex;
  width: 283px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;

  .UserName {
  }
  color: ${color.black};

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  .ChattingInfo {
    color: ${color.black};

    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`;

const CameraIcon = styled.img`
  width: 24px;
  height: 24px;
  padding-bottom: 0px;
`;
