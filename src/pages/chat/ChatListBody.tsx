import ChatListElement from 'pages/chat/ChatListElement';
import styled from 'styled-components';

const ChatListBody = () => {
  return (
    <ChatListBodyContainer>
      <ChatListElement />
      <ChatListElement />
    </ChatListBodyContainer>
  );
};

const ChatListBodyContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`;
export default ChatListBody;
