import { useNavigate, useParams } from 'react-router-dom';
import ButtonWithIcon from 'pages/common/ButtonWithIcon';
import { ReactComponent as BackIcon } from 'static/images/back-arrow-icon.svg';
import styled from 'styled-components';
import userData from 'data/userData.json';
import { TUser } from 'types';

interface ChatRoomHeaderProps {
  headerRef: React.RefObject<HTMLDivElement>;
}

const typedUserData: TUser[] = userData.data;

const ChatRoomHeader = ({ headerRef }: ChatRoomHeaderProps) => {
  const navigate = useNavigate();
  const { id }: { id?: string } = useParams();

  const storedUser = localStorage.getItem(`user_${id}`);
  const roomOwner = storedUser // 해당 방이 누구와의 대화방인지
    ? JSON.parse(storedUser)
    : typedUserData.find((user) => user.id === Number(id));

  return (
    <ChatRoomHeaderContainer ref={headerRef}>
      <BackButton
        children={<BackIcon />}
        handleClickButton={() => {
          navigate('/chat');
        }}
      />
      <UserNameDiv>{roomOwner!.name}</UserNameDiv>
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
  background-color: var(--Blue);
`;

const BackButton = styled(ButtonWithIcon)`
  height: 28px;
  width: 28px;
`;
const UserNameDiv = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-left: 9px;
`;
