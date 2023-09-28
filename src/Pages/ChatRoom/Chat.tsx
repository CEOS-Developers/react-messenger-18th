import { styled } from "styled-components";

const Chat: React.FC<{ value: string; id: number; sender: boolean }> = ({
  value,
  id,
  sender,
}) => {
  return (
    <div className="Chat">
      <ChatContainer>
        <Content>{value}</Content>
      </ChatContainer>
    </div>
  );
};

export default Chat;

const ChatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Content = styled.div`
  border: none;
  outline: none;
  border-radius: 16px;
  background-color: #1263dc;
  color: rgba(242, 241, 248, 1);
  font-weight: 400;
  padding: 8px 12px;
  margin-top: 4px;
`;
