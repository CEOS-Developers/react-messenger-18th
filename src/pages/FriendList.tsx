import React from 'react';
import Footer from '../components/Footer';
import styled from 'styled-components';

const FriendList = () => {
  return (
    <div>
      <Wrapper>
        <Body>
          <Footer />
        </Body>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem;

  margin-top: 15px;
`;

const Body = styled.div`
  height: 80%;
  overflow-y: auto;
  padding: 5px;

  scroll-behavior: smooth;
`;
export default FriendList;
