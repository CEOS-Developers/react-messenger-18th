import styled from "styled-components";
import { Heading1 } from "../../style/font";

const ChatHeader = () => {
  return (
    <ChatHeaderWrapper>
      <Heading1 className="chat-logo" color=" var(--gray-7)">
        대화
      </Heading1>
    </ChatHeaderWrapper>
  );
};
export default ChatHeader;

const ChatHeaderWrapper = styled.div`
  height: 4.25rem;
  display: flex;
  align-items: center;
  border-bottom: solid 0.0625rem var(--gray-3);
  .chat-logo {
    padding-left: 1.25rem;
  }
`;
