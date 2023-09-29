import React from 'react';
import styled from 'styled-components';
import theme from '../style/theme';

// 채팅 박스의 입력 프로퍼티를 정의하는 인터페이스
interface ChatBoxProps {
  text: string;
  hasTail: boolean;
}

// ChatBoxProps를 사용하여 채팅 박스 컴포넌트를 정의
const ChatBox: React.FC<ChatBoxProps> = ({ text, hasTail }) => {
  return (
    <>
      {hasTail && <WrapperTail>{text}</WrapperTail>}
      {!hasTail && <Wrapper>{text}</Wrapper>}
    </>
  );
};

const commonStyles = `
  padding: 0.5rem 0.75rem;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.g2};
  display: inline-block; 
`;

const WrapperTail = styled.div`
  ${commonStyles}
  border-radius: 0rem 0.75rem 0.75rem 0.75rem;
`;

const Wrapper = styled.div`
  ${commonStyles}
  border-radius: 0.75rem;
`;

export default ChatBox;
