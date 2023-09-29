import styled from "styled-components";
import arrowIcon from "../../assets/images/Arrow.svg";
import userIcon from "../../assets/images/User.svg";
import facetime from "../../assets/images/Facetime.svg";
const ChatTitle = () => {
  return (
    <ChatTitleContainer>
      <ArrowIcon src={arrowIcon} alt="arrow Icon" />
      <UserIcon src={userIcon} alt="user Icon" />
      <div></div>
      <Facetime src={facetime} alt="facetime Icon" />
    </ChatTitleContainer>
  );
};

const ChatTitleContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 22.3125rem;
  height: 2.5rem;
`;
const ArrowIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

const UserIcon = styled.img`
  width: 2.06244rem;
  height: 2.06238rem;
`;
const Facetime = styled.img`
  margin-right: 1.12rem;
`;

export default ChatTitle;
