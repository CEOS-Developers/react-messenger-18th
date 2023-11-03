import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import userData from "../../assets/datas/userdata.json";
//component
import SearchBar from "../../components/SearchBar/serachbar";
//이미지들
import bigIcon from "../../assets/images/BigIcon.svg";
import bottomBar from "../../assets/images/LightBottomBar.svg";
import StatusBar from "../../components/StatusBar/statusbar";
import TopBar from "../../components/TopBar/topbar";
import bubbleImg from "../../assets/images/bubbleStatusImg.svg";

interface User {
  id: number;
  name: string;
  instagram: string;
  status: string;
}
//친구 목록에서 status가 존재하는지 여부
interface FriendsListItemProps {
  statusExist: boolean;
}

export default function Friends() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [friends, setFriends] = useState(userData.users);

  function getFilteredUsers(users: User[], searchTerm: string) {
    if (!searchTerm) return users;
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredUsers;
  }
  const filteredUsers = getFilteredUsers(friends, searchTerm);

  return (
    <div className="pageWrapper">
      <ProfileContainer>
        <StatusBar />
        <TopBar />
        <Title>Friends</Title>
        <SearchBar
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <FriendsContainer>
          {filteredUsers.map((user, index) => (
            <FriendsListItem
              key={index}
              onClick={() => navigate(`/chat/${user.id}`)}
              statusExist={!!user.status} //  user.status boolean 가져와서
            >
              {user.status && (
                //상메가 설정된 경우 버블 안에 보여줌
                <StatusBubble>
                  <img src={bubbleImg} alt="Status bubble" />
                  <span>{user.status}</span>
                </StatusBubble>
              )}

              <img src={bigIcon} />
              <Name>{user.name}</Name>
              <Instagram>{user.instagram}</Instagram>
            </FriendsListItem>
          ))}
        </FriendsContainer>
        <BottomBarIcon src={bottomBar} alt="bottom bar Icon" />
      </ProfileContainer>
    </div>
  );
}

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  border-radius: 1.5rem;
  height: 100%;
  width: 100vw;
  border: solid var(--gray-1);
`;

const Title = styled.span`
  font-family: "SF Pro Text";
  font-size: 2.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 80%;
  width: 100%;
  padding-left: 1.37rem;
  margin-bottom: 1.75rem;
  display: flex;
  justify-content: space-between;
  padding-right: 1.12rem;
`;
const BottomBarIcon = styled.img`
  width: 100%;
  height: 2.125rem;
  margin-bottom: 0;
  /* position: relative; */
  position: absolute;
  bottom: 0;
`;

const FriendsContainer = styled.div`
  display: flex;
  flex-flow: wrap; //여러줄에 아이템 표시
  overflow-y: auto;
  width: 100%;
  padding: 0 1rem;
  justify-content: flex-start;
`;

const FriendsListItem = styled.div<FriendsListItemProps>`
  position: relative; // 상메 올라가는 기준점
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: ${(props) =>
    props.statusExist
      ? "1.1rem"
      : "2.1rem"}; // 상메 있는지 여부에 따라 margin-top을 변경

  //default: 노트북 환경
  width: 100%;
  max-width: 10%; // item이 한줄에 10개씩 오도록

  @media (max-width: 850px) {
    // 화면 너비가 850px 이하인 경우 (ipad 환경)
    width: 100%;
    max-width: 20%; //  item이 한줄에 5개씩 오도록
  }

  @media (max-width: 480px) {
    // 화면 너비가 480px 이하인 경우 (모바일 환경)
    width: 100%;
    max-width: 33%; // item이 한줄에 3개씩 오도록
    margin-right: 0;
  }
`;

const StatusBubble = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  img {
    position: absolute;
    border-radius: inherit;
  }

  span {
    position: relative;
    z-index: 2; // 이미지 위에 텍스트
    overflow: hidden;
    white-space: nowrap;
    color: var(--black);
    font-family: "SF Pro Text";
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
`;
const Name = styled.div`
  margin-top: 0.5rem;
  color: var(--black);
  text-align: center;
  font-family: "SF Pro Text";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const Instagram = styled.div`
  color: var(--gray-1);
  text-align: center;
  font-family: "SF Pro Text";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
`;
