import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { chattingInterface } from "../../assets/types/interfaces";

import { useRecoilValue } from "recoil";
import { userArrayState, chatArrayState } from "../../assets/recoil/recoil";
//img
import camera from "../../assets/images/camera-line.svg";

interface ChattingItemProps {
  chatting: chattingInterface;
}

const ChatListItem = ({ chatting }: ChattingItemProps) => {
  const navigate = useNavigate();

  const userArray = useRecoilValue(userArrayState);
  const friendId = chatting.users.filter((id) => id !== 0)[0];
  const friendInfoById = userArray.filter((user) => user.id === friendId)[0];
  return (
    <Box onClick={() => navigate(`/chatting/${friendInfoById.id}`)}>
      <UserImg src={friendInfoById.profileImage} />
      <UserInfo>
        <div className="UserName">{friendInfoById.userName}</div>
        <div className="ChattingInfo">
          <span>새 메세지 3개</span>
          {/* 읽음 여부 따라 색 변경 */}
          <span> • 6시간 </span>
        </div>
      </UserInfo>
      <CameraIcon src={camera} />
    </Box>
  );
};

export default ChatListItem;

const Box = styled.div`
  display: flex;
  width: 375px;
  height: 52px;
  padding: 0px 12px;
  justify-content: center;
  align-items: center;

  padding: 0 12px;
  gap: 8px;
`;

const UserImg = styled.img`
  display: flex;
  width: 52px;
  height: 52px;
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
  color: var(--gray-black, #000);

  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  .ChattingInfo {
    color: var(--gray-gray-3, #808080);

    font-size: 13px;
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
