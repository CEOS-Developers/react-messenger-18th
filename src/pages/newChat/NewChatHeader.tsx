import SearchBar from 'pages/common/SearchBar';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface NewChatHeaderProps {
  query: string;
  selected: number | null;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const NewChatHeader = ({
  query,
  selected,
  handleChange,
}: NewChatHeaderProps) => {
  const navigate = useNavigate();

  return (
    <NewChatHeaderContainer>
      <SearchBar
        query={query}
        handleChange={handleChange}
        customStyle="flex:1;"
      />
      <CancelButton
        onClick={() => {
          if (selected) navigate(`/chat/${selected}`);
          else navigate(-1);
        }}
      >
        {selected ? '확인' : '취소'}
      </CancelButton>
    </NewChatHeaderContainer>
  );
};

const NewChatHeaderContainer = styled.div`
  display: flex;
`;

const CancelButton = styled.button`
  margin-left: 10px;
  color: var(--Gray-3);
`;
export default NewChatHeader;
