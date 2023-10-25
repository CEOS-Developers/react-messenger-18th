import { useState } from 'react';
import styled from 'styled-components';
import NewChatHeader from 'pages/newChat/NewChatHeader';
import NewChatBody from 'pages/newChat/NewChatBody';

const NewChat = () => {
  const [query, setQuery] = useState<string>('');

  return (
    <NewChatContainer>
      <NewChatHeader
        query={query}
        handleChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <NewChatBody query={query} />
    </NewChatContainer>
  );
};

const NewChatContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px 12px 0 12px;
`;

export default NewChat;
