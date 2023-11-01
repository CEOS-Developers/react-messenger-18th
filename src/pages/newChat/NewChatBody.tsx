import { useUserStore } from 'stores/userStore';
import styled from 'styled-components';
import NewChatElement from 'pages/newChat/NewChatElement';
import { getSearchedUsers } from 'utils';

interface NewChatBodyProps {
  query: string;
  selected: number | null;
  setSelected: React.Dispatch<React.SetStateAction<number | null>>;
}
const NewChatBody = ({ query, selected, setSelected }: NewChatBodyProps) => {
  const user = useUserStore((state) => state.user);
  const users = getSearchedUsers(user.id, query);

  return (
    <NewChatBodyConatiner>
      {users.map((e) => (
        <NewChatElement
          key={`${e.id}${e.statusMessage}`}
          user={e}
          checked={selected === e.id}
          handleChange={() => {
            setSelected(e.id);
          }}
        />
      ))}
    </NewChatBodyConatiner>
  );
};

const NewChatBodyConatiner = styled.div`
  margin-top: 20px;
`;
export default NewChatBody;
