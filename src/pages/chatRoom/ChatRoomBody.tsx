import styled from 'styled-components';
import { ChatRoomBackgroundColor } from 'styles/global.style';

const ChatRoomBody = () => {
  return <ChatRoomBodyContainer></ChatRoomBodyContainer>;
};

// const ChatRoomMyMessageColor = '#ACE49B';

const ChatRoomBodyContainer = styled.div`
  background: ${ChatRoomBackgroundColor};
`;
export default ChatRoomBody;
