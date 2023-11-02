import React, { useState, useEffect } from "react";
import styled from "styled-components";

//data
import { useRecoilValue } from "recoil";
import { meAtom, friendsListAtom } from "../assets/recoil/recoil";
import { color } from "../assets/styles/color";

//components
import SearchingBar from "../components/common/SearchingBar";
import FriendItem from "../components/common/FriendItem";

//bar
import bars from "../assets/images/bars.svg";
import status from "../assets/images/status.svg";

function FriendsListPage() {
  const meUser = useRecoilValue(meAtom);
  const otherUsers = useRecoilValue(friendsListAtom);
  const friendCount = otherUsers.length;
  return (
    <Container>
      <StatusBar src={status} />
      <SearchingBar showSearch={false} />
      <FriendItem user={meUser} emp={true} />
      <Guide>
        <div className="line"></div>
        <span className="friend-number">친구 {friendCount}</span>
      </Guide>
      <FriendListContainer>
        {otherUsers.map((user) => (
          <FriendItem key={user.id} user={user} emp={false} />
        ))}
      </FriendListContainer>
      <Bar src={bars} />
    </Container>
  );
}

export default FriendsListPage;

const Container = styled.div`
  background-color: #fff;
`;

const StatusBar = styled.img`
  width: 375px;
  height: 44px;
`;

const Guide = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 18px 0 15px;
  margin: 16px 0;

  .line {
    border-bottom: 1px solid ${color.grey1};
    margin-bottom: 16px;
  }
`;

const FriendListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;

const Bar = styled.img`
  width: 375px;
  height: 34px;
`;
