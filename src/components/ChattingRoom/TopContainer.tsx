import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { color } from "../../assets/styles/color";
import { useSender } from "../../assets/SenderContext";
//data
import { useRecoilValue } from "recoil";
import { userArrayState } from "../../assets/recoil/recoil";

//img
import back from "../../assets/images/back.svg";
import call from "../../assets/images/phone.svg";
import video from "../../assets/images/video.svg";

function TopContainer({ friendId }: { friendId: number }) {
  const navigate = useNavigate();
  const { sender, setSender } = useSender();
  const userArray = useRecoilValue(userArrayState);
  const currentUser = userArray[sender === 0 ? friendId : 0];

  const handleUserInfoClick = () => {
    setSender(sender === 0 ? friendId : 0);
  };
  return (
    <>
      <Container>
        <Box>
          <Icon src={back} onClick={() => navigate(-1)} />
          <UserInfo>
            <Profile src={currentUser.profileImage} />
            <div onClick={handleUserInfoClick}>
              <UserName>{currentUser.userName}</UserName>
              <UserID>{currentUser.userID}</UserID>
            </div>
          </UserInfo>
        </Box>
        <Box>
          <Icon src={call} />
          <Icon src={video} />
        </Box>
      </Container>
    </>
  );
}

export default TopContainer;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 375px;
  height: 48px;
  flex-shrink: 0;
  padding: 0 8px;
  border-bottom: 1px solid ${color.grey1};
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const UserInfo = styled.div`
  display: flex;
`;

const Profile = styled.img`
  display: flex;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  margin-right: 8px;
`;

const UserName = styled.div`
  color: ${color.black};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
`;

const UserID = styled.div`
  color: ${color.grey3};

  font-size: 13px;
  font-style: normal;
  font-weight: 400;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;

  margin: 0 12px 0 10px;
`;
