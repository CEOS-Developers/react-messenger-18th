import React from "react";
import styled from "styled-components";
import { color } from "../assets/styles/color";

//img
import back from "../assets/images/back.svg";
import call from "../assets/images/phone.svg";
import video from "../assets/images/video.svg";

import profile1 from "../assets/images/Profile1.svg";

//profile

function TopContainer() {
  return (
    <>
      <Container>
        <Box>
          <Icon src={back} />
          <UserInfo>
            <Profile src={profile1} />
            <div>
              <UserName>Yoem</UserName>
              <UserID>hi.yeomm</UserID>
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
`;

const Box = styled.div`
  display: flex;
  align-items: center;
`;

const UserInfo = styled.div`
  display: flex;
`;

const Profile = styled.img`
  display: flex;
  width: 36px;
  height: 36px;
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
  color: ${color.gray3};

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
