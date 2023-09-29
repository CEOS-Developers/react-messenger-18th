import { styled } from "styled-components";
import Chat from "./Chat";

type InchatListProps = {
  chat: Array<{ value: string; id: number; sender: boolean; date: string }>;
};

const InchatList: React.FC<InchatListProps> = ({ chat }) => {
  return (
    <Wrapper>
      <Container>
        <Container id="chat-container">
          {chat.map((message, index) => (
            <Chat
              value={message.value}
              id={message.id}
              sender={message.sender}
              date={message.date}
              key={message.id}
              showDate={
                index === chat.length - 1 ||
                message.date !== chat[index + 1].date
              }
            />
          ))}
        </Container>
      </Container>
    </Wrapper>
  );
};

export default InchatList;
const Wrapper = styled.div`
  height: 605px;
`;

const Container = styled.div`
  position: fixed;
  width: 375px;
  height: 605px;
  overflow: auto;
  display: flex;
  /* justify-content: flex-end; */
  align-items: flex-end;
  flex-direction: column;
  bottom: 90px;
  > * {
    &:first-child {
      margin-top: auto !important;
    }
  }
`;
