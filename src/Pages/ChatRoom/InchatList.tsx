import { styled } from "styled-components";
import Chat from "./Chat";

type InchatListProps = {
  chat: Array<{ value: string; id: number; sender: boolean }>;
};

const InchatList: React.FC<InchatListProps> = ({ chat }) => {
  return (
    <Wrapper>
      <Container>
        {chat.map((it) => (
          <Chat value={it.value} id={it.id} sender={it.sender} key={it.id} />
        ))}
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
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  bottom: 90px;
`;
