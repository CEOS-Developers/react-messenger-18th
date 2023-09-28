import { styled } from "styled-components";
import Chat from "./Chat";

type InchatListProps = {
  chat: Array<{ value: string; id: number; sender: boolean }>;
};

const InchatList: React.FC<InchatListProps> = ({ chat }) => {
  return (
    <Wrapper>
      <div>
        {chat.map((it) => (
          <Chat value={it.value} id={it.id} sender={it.sender} key={it.id} />
        ))}
      </div>
    </Wrapper>
  );
};

export default InchatList;

const Wrapper = styled.div`
  position: fixed;
  width: 375px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: flex-end;
  bottom: 90px;
`;
