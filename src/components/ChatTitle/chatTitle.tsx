import styled from "styled-components";
import arrowIcon from "../../assets/images/chatBackArrow.svg";
import userIcon from "../../assets/images/User.svg";
import facetime from "../../assets/images/Facetime.svg";
import { useNavigate } from "react-router-dom";

interface ChatHeaderProps {
  chatName: string;
  chatID: string;
  changeUser?: () => void;
}
const ChatTitle: React.FC<ChatHeaderProps> = ({
  chatName,
  chatID,
  changeUser,
}) => {
  const navigate = useNavigate();
  return (
    <ChatTitleContainer>
      <ArrowIcon
        src={arrowIcon}
        alt="arrow Icon"
        onClick={() => navigate("/chatlist")}
      />
      <UserIcon onClick={changeUser} src={userIcon} alt="user Icon" />
      <UserSection onClick={changeUser}>
        <UserName>{chatName}</UserName>
        <InstagramID>{chatID}</InstagramID>
      </UserSection>
      <Facetime src={facetime} alt="facetime Icon" />
    </ChatTitleContainer>
  );
};

const ChatTitleContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 2.5rem;
  padding-bottom: 0.7rem;
  border-bottom: solid rgba(144, 144, 147, 0.5);
`;
const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;
const UserName = styled.div`
  color: var(--black);
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  word-wrap: break-word;
`;
const InstagramID = styled.div`
  color: var(--gray-1);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 0.9375rem */
`;
const ArrowIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

const UserIcon = styled.img`
  width: 2.06244rem;
  height: 2.06238rem;
  margin-right: 0.64rem;
  &:hover {
    cursor: pointer;
  }
`;
const Facetime = styled.img`
  margin-right: 1.12rem;
`;

export default ChatTitle;
