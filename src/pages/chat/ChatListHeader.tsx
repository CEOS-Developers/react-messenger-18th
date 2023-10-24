import ButtonWithIcon from 'pages/common/ButtonWithIcon';
import styled from 'styled-components';
import { ReactComponent as StartChatIcon } from 'static/images/start-chat-icon.svg';
import { ReactComponent as MoreIcon } from 'static/images/more-icon.svg';
import { ReactComponent as SearchIcon } from 'static/images/search-icon.svg';

interface ChatListHeaderProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const ChatListHeader = ({ query, setQuery }: ChatListHeaderProps) => {
  return (
    <ChatListHeaderContainer>
      <ChatListHeaderTop>
        <div className="title">Chats</div>
        <StartChatButton children={<StartChatIcon />} />
        <MoreButton children={<MoreIcon />} />
      </ChatListHeaderTop>
      <ChatListSearchInputContainer>
        <SearchIcon />
        <ChatListSearchInput
          placeholder="Search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </ChatListSearchInputContainer>
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

const StartChatButton = styled(ButtonWithIcon)`
  width: 32px;
  height: 32px;
`;

const MoreButton = styled(ButtonWithIcon)`
  width: 32px;
  height: 32px;
`;

const ChatListSearchInputContainer = styled.div`
  height: 32px;
  border-radius: 4px;
  background: var(--Gray-1);
  display: flex;
  align-items: center;
  padding: 0 12px;
`;

const ChatListSearchInput = styled.input`
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 120%;
  color: var(--Gray-2);
  border: none;
  background: transparent;
  margin-left: 10px;

  &::placeholder {
    color: var(--Gray-2);
  }
`;

export default ChatListHeader;
