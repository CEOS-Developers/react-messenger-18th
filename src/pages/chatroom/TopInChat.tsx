import Icon from "./icon";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const TopInChat: React.FC<{
  currentUser: { id: number; name: string };
  changeUser: (targetId: number) => void;
}> = ({ currentUser, changeUser }) => {
  return (
    <Container>
      <TopInChatContainer>
        <Link to="/chat">
          <StyledBackIcon size={36} icon="back" color="#33333A" />
        </Link>
        <UserName
          onClick={() => {
            changeUser(currentUser.id);
          }}
        >
          {currentUser.name}{" "}
        </UserName>
        <RightItems>
          <Icon size={28} icon="search" color="#33333A" />
          <Icon size={28} icon="menu" color="#33333A" />
        </RightItems>
      </TopInChatContainer>
    </Container>
  );
};
export default TopInChat;

const Container = styled.div`
  display: flex;
  padding: 12px;
  flex-direction: column;
  justify-content: center;
`;

const TopInChatContainer = styled.div`
  display: flex;
  width: 351px;
  height: 36px;
  justify-content: space-between;
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  padding-right: 180px;
  padding-top: 2px;
  font-weight: 600;
  color: #33333a;
`;

const StyledBackIcon = styled(Icon)`
  display: flex;
  align-items: center;
`;

const RightItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 4px;
  padding-top: 8px;
`;
