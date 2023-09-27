import { useNavigate, useParams } from 'react-router-dom';
import { useUserStore } from 'stores/userStore';
import ButtonWithIcon from 'pages/common/ButtonWithIcon';
import { ReactComponent as BackIcon } from 'static/images/back-arrow-icon.svg';
import styled from 'styled-components';
import { ChatRoomBackgroundColor } from 'styles/global.style';
import userData from 'data/userData.json';
import { TUser } from 'types';

interface ChatRoomHeaderProps {
  headerRef: React.RefObject<HTMLDivElement>;
}

const typedUserData: {
  [key: string]: TUser;
} = userData;

const ChatRoomHeader = ({ headerRef }: ChatRoomHeaderProps) => {
  const navigate = useNavigate();
  const { id }: { id?: string } = useParams();
  const user = useUserStore((state) => state.user);

  const storedUser = localStorage.getItem(`user_${id}`);
  const roomOwner = storedUser // 해당 방이 누구와의 대화방인지
    ? JSON.parse(storedUser)
    : typedUserData[`user_${id}`];

  return (
    <ChatRoomHeaderContainer ref={headerRef}>
      <ButtonWithIcon children={<BackIcon />} />
      <UserNameDiv
        onClick={() => {
          navigate(`/chat/${user.id}`); // 유저 변경
        }}
      >
        {roomOwner!.name}
      </UserNameDiv>
    </ChatRoomHeaderContainer>
  );
};

export default ChatRoomHeader;

// ############### 디자인 ###############

const ChatRoomHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 53px;
  width: 100%;
  padding: 8px 0 14px 16px;
  background-color: ${ChatRoomBackgroundColor};
`;

const UserNameDiv = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-left: 9px;
`;
