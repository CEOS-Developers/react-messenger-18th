//style
import { ReactComponent as Friends } from "../../assets/icons/Friends.svg";
import { ReactComponent as Next } from "../../assets/icons/Next.svg";
import { ReactComponent as Star } from "../../assets/icons/Star.svg";
import { Body2, Caption1, Heading2 } from "../../style/font";
import styled from "styled-components";
//component
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  chatRoomListState,
  friendsState,
  greenDotState,
} from "../../recoil/state";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

interface ProfileCardProps {
  userIndex: number;
  favorite: boolean; // 현재 페이지 상태
}
const ProfileCard = (props: ProfileCardProps) => {
  const navigate = useNavigate();
  const chatList = useRecoilValue(chatRoomListState);
  //사용자 제외 친구 list
  const [users, setUsers] = useRecoilState(friendsState);
  //즐겨찾기 추가 시 dot
  const setGreenDot = useSetRecoilState(greenDotState);
  //favorite 버튼 toggle
  const [favoriteToggle, setFavoriteToggle] = useState(false);
  //우클릭 시 메뉴
  const handleOnContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setFavoriteToggle(!favoriteToggle);
  };
  //즐겨찾기 click
  const handleFavoriteClick = () => {
    const copy = [...users];
    if (copy[props.userIndex].favorite === 0) {
      copy[props.userIndex] = {
        ...copy[props.userIndex],
        favorite: 1,
      };
    } else if (copy[props.userIndex].favorite === 1) {
      copy[props.userIndex] = {
        ...copy[props.userIndex],
        favorite: 0,
      };
    }
    //현재 즐겨찾기 상태일 때는 업데이트 점 X
    if (props.favorite === false) {
      setGreenDot(true);
    }
    setUsers(copy);
    setFavoriteToggle(!favoriteToggle);
  };
  //navigate
  //friend index가 상대방인 채팅으로 navigate
  const handleNavigate = () => {
    const chatNumber = chatList.findIndex(
      (chatRoom) => chatRoom.userList[1] === props.userIndex + 1
    );
    console.log(chatNumber);
    if (chatNumber === -1) {
      alert("채팅 없음 미구현");
    } else {
      navigate("/chat/" + chatNumber);
    }
  };
  //모바일 터치 슬라이드 구현
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current) {
      const touchEndX = e.changedTouches[0].clientX;
      //X 움직인거리
      const moveX = touchEndX - touchStartX.current;
      if (moveX > 50) {
        if (favoriteToggle === false) {
          setFavoriteToggle(!favoriteToggle);
        }
      } else if (moveX < -50) {
        if (favoriteToggle === true) {
          setFavoriteToggle(!favoriteToggle);
        }
      }
      touchStartX.current = null;
    }
  };
  return (
    <ProfileCardWrapper
      onContextMenu={handleOnContextMenu}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <FavoriteButton
        favoriteToggle={favoriteToggle}
        onClick={handleFavoriteClick}
      >
        <StarIcon />
      </FavoriteButton>

      <ProfileContentWrapper favoriteToggle={favoriteToggle}>
        <FriendsIcon />
        <ProfileContent>
          <div className="user-info">
            <Heading2 color="var(--gray-7)">
              {users[props.userIndex].name}
            </Heading2>
            {users[props.userIndex].isWorking === "근무 중" ? (
              <Caption1 color="var(--green)">
                {users[props.userIndex].isWorking}
              </Caption1>
            ) : (
              <Caption1 color="var(--gray-4)">
                {users[props.userIndex].isWorking}
              </Caption1>
            )}
          </div>
          <Body2 className="last-chat" color="var(--gray-4)">
            {users[props.userIndex].company}/{users[props.userIndex].department}
            /{users[props.userIndex].rank}
          </Body2>
          {favoriteToggle === false ? (
            <NextIcon onClick={handleNavigate} />
          ) : null}
        </ProfileContent>
      </ProfileContentWrapper>
    </ProfileCardWrapper>
  );
};
export default ProfileCard;

const ProfileCardWrapper = styled.div`
  height: 6rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;
//transition svg 작아짐 이슈로 absolute 설정
const ProfileContentWrapper = styled.div<{ favoriteToggle: boolean }>`
  display: flex;
  position: absolute;
  height: 3.5rem;
  width: 20.9375rem;
  left: ${(props) => (props.favoriteToggle ? "6rem" : "1.25rem")};
  top: 1.25rem;
  transition: left 0.3s ease;
`;
const ProfileContent = styled.div`
  width: 16.7475rem;
  display: flex;
  flex-direction: column;
  position: relative;
  .user-info {
    display: flex;
    gap: 0.5rem;
  }
`;
const FriendsIcon = styled(Friends)`
  width: 3.5rem;
  height: 3.5rem;
  padding-right: 0.69rem;
`;
const NextIcon = styled(Next)`
  position: absolute;
  right: 0;
  top: 1rem;
  width: 0.625rem;
  height: 1.25rem;
  cursor: pointer;
`;
const StarIcon = styled(Star)`
  width: 1.25rem;
  height: 1.25rem;
  color: var(--black);
`;
const FavoriteButton = styled.div<{ favoriteToggle: boolean }>`
  width: ${(props) => (props.favoriteToggle === true ? "4.25rem" : "0rem")};
  height: 6rem;
  background-color: var(--green);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: width 0.3s ease;
  cursor: pointer;
`;
