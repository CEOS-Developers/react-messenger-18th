import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { color } from "../../assets/styles/color";

//img
import check from "../../assets/images/check.svg";
import checked from "../../assets/images/checked.svg";

interface FriendItemProps {
  user: {
    id: number;
    userID: string;
    profileImage: string;
    userName: string;
  };
  emp: boolean;
}

const FriendItem = ({ user, emp = false }: FriendItemProps) => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  // 검색 페이지일 때만 체크 표시 뜨게 하는 state
  const handleToggleCheck = () => {
    if (!isSearching) {
      navigate(`/profile/${user.id}`);
    } else {
      setIsChecked(!isChecked);
    }
  };
  return (
    <Box onClick={handleToggleCheck}>
      <UserImg src={user.profileImage} />
      <UserInfo emp={emp}>
        <div className="UserName">{user.userName}</div>
        <span className="ChattingInfo">{user.userID}</span>
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

const UserInfo = styled.div<{ emp: boolean }>`
  display: flex;
  width: 283px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: ${(props) => (props.emp ? "1px" : "4px")};

  font-size: ${(props) => (props.emp ? "0.9rem" : "0.6rem")};
  font-weight: ${(props) => (props.emp ? 600 : 500)};
  font-style: normal;
  line-height: 130%;

  .UserName {
  }
  color: ${color.black};

  .ChattingInfo {
    color: ${color.black};
  }
`;

const CameraIcon = styled.img`
  width: 24px;
  height: 24px;
  padding-bottom: 0px;
`;
