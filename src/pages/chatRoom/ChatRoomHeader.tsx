import ButtonWithIcon from 'pages/common/ButtonWithIcon';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactComponent as BackIcon } from 'static/images/back-arrow-icon.svg';
import styled from 'styled-components';
import { ChatRoomBackgroundColor } from 'styles/global.style';
import userData from 'data/userData.json';
import { useUserStore } from 'stores/userStore';
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
  const roomOwner = storedUser
    ? JSON.parse(storedUser)
    : typedUserData[`user_${id}`];

  return (
    <ChatRoomHeaderContainer ref={headerRef}>
      <ButtonWithIcon children={<BackIcon />} />
      <UserNameDiv
        onClick={() => {
          navigate(`/chat/${user.id}`);
        }}
      >
        {roomOwner!.name}
      </UserNameDiv>
    </ChatRoomHeaderContainer>
  );
};

const ChatRoomHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 53px;
  width: 100%;
  padding: 6px 0 18px 16px;
  background-color: ${ChatRoomBackgroundColor};
`;

const UserNameDiv = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-left: 9px;
`;
export default ChatRoomHeader;
