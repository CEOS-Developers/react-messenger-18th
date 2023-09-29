import { styled } from "styled-components";

const Chat: React.FC<{
  value: string;
  id: number;
  sender: boolean;
  date: string;
}> = ({ value, date }) => {
  return (
    <div className="Chat">
      <ChatContainer>
        <Date>{date}</Date>
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
  max-width: 216px;
  gap: 4px;
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

const Date = styled.div`
  border: none;
  outline: none;

  color: rgba(130, 128, 153, 1);
  font-weight: 400;
  font-size: 10px;
  margin-top: 22px;
`;
