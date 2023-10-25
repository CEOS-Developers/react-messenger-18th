import userData from 'data/userData.json';
import { useUserStore } from 'stores/userStore';
import { include } from 'utils/search';
import styled from 'styled-components';
import NewChatElement from 'pages/newChat/NewChatElement';

interface NewChatBodyProps {
  query: string;
  selected: number | null;
  setSelected: React.Dispatch<React.SetStateAction<number | null>>;
}
const NewChatBody = ({ query, selected, setSelected }: NewChatBodyProps) => {
  const user = useUserStore((state) => state.user);
  const storedUserData = userData.data.filter(
    (e) => e.id !== user.id && include(e.name, query)
  );
  for (let i = 0; i < storedUserData.length; i += 1) {
    const data = localStorage.getItem(`user_${storedUserData[i].id}`);
    if (data) {
      storedUserData[i] = JSON.parse(data);
    }
  }

  // 사전순 정렬
  storedUserData.sort((a, b) => {
    if (a.name < b.name) return -1;
    else return 1;
  });

  return (
    <NewChatBodyConatiner>
      {storedUserData.map((e) => (
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
