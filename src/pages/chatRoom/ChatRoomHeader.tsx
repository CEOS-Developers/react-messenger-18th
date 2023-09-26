import ButtonWithIcon from 'pages/common/ButtonWithIcon';
import { ReactComponent as BackIcon } from 'static/images/back-arrow-icon.svg';
import styled from 'styled-components';
import { ChatRoomBackgroundColor } from 'styles/global.style';

const ChatRoomHeader = () => {
  return (
    <ChatRoomHeaderContainer>
      <ButtonWithIcon children={<BackIcon />} />
      <UserNameDiv>배수연</UserNameDiv>
    </ChatRoomHeaderContainer>
  );
};

const ChatRoomHeaderContainer = styled.div`
  position: fixed;
  top: 0;
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
