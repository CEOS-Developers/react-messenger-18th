import ChatRoom from './pages/ChatRoom';
import React from 'react';
import styled from 'styled-components';
import theme from './style/theme';

function App() {
  return (
    <Wrapper>
      <Box>
        <ChatRoom id={0} />
      </Box>
    </Wrapper>
  );
}

const Box = styled.div`
  width: 23.4375rem;
  height: 50.75rem;
  border-radius: 1rem;
  background: var(--white, #fff);
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: ${theme.colors.g2};
`;

export default App;
