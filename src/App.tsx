import ChatRoom from './pages/ChatRoom';
import React from 'react';
import styled from 'styled-components';

function App() {
  return (
    <Wrapper>
      <ChatRoom id={0} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 23.4375rem;
  height: 50.75rem;
  border-radius: 1rem;
  background: var(--white, #fff);

  border: 1px solid black;
`;

export default App;
