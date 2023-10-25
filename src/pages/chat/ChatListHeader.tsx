import ButtonWithIcon from 'pages/common/ButtonWithIcon';
import styled from 'styled-components';
import { ReactComponent as StartChatIcon } from 'static/images/start-chat-icon.svg';
import { ReactComponent as MoreIcon } from 'static/images/more-icon.svg';
import { useNavigate } from 'react-router-dom';
import SearchBar from 'pages/common/SearchBar';

interface ChatListHeaderProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const ChatListHeader = ({ query, setQuery }: ChatListHeaderProps) => {
  const navigate = useNavigate();

  return (
    <ChatListHeaderContainer>
      <ChatListHeaderTop>
        <div className="title">Chats</div>
        <ButtonWithIcon
          children={<StartChatIcon />}
          handleClickButton={() => {
            navigate('/new-chat');
          }}
          size={32}
        />
        <ButtonWithIcon children={<MoreIcon />} size={32} />
      </ChatListHeaderTop>
      <SearchBar
        query={query}
        handleChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </ChatListHeaderContainer>
  );
};

const ChatListHeaderContainer = styled.div`
  height: 113px;
  width: 100%;
  padding: 26px 12px 20px 12px;
`;

const ChatListHeaderTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  .title {
    font-size: 20px;
    font-weight: 600;
    line-height: 160%;
    margin-right: auto;
  }
`;

export default ChatListHeader;
