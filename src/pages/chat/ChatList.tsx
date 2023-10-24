import ChatListBody from 'pages/chat/ChatListBody';
import ChatListHeader from 'pages/chat/ChatListHeader';
import { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';

const ChatList = () => {
  const [query, setQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 700);
    }
  }, [query]);

  return (
    <ChatListContainer>
      <ChatListHeader query={query} setQuery={setQuery} />
      {isLoading ? (
        <ClipLoader
          size={40}
          cssOverride={{
            display: 'flex',
            margin: '0 auto',
            marginTop: '30px',
            textAlign: 'center',
          }}
        />
      ) : (
        <ChatListBody query={query} />
      )}
    </ChatListContainer>
  );
};

const ChatListContainer = styled.div`
  flex: 1;
  overflow: hidden;
  width: 100%;
  background-color: var(--Background-White);
  display: flex;
  flex-direction: column;
`;

export default ChatList;
