import React from 'react';
import styled from 'styled-components';
import theme from '../style/theme';

// 채팅 박스의 입력 프로퍼티를 정의하는 인터페이스
interface ChatBoxProps {
  isMe: boolean;
  text: string;
  hasTail: boolean;
  time: string;
}

// ChatBoxProps를 사용하여 채팅 박스 컴포넌트를 정의
const ChatBox: React.FC<ChatBoxProps> = ({ text, hasTail, isMe, time }) => {
  return (
    <Wrapper>
      {isMe && (
        <MyBox>
          <Time>{time}</Time>
          <MyChat>{text}</MyChat>
        </MyBox>
      )}
      {!isMe && (
        <YourBox>
          <YourChat>{text}</YourChat>
          <Time>{time}</Time>
        </YourBox>
      )}
    </Wrapper>
  );
};

const Time = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: ${theme.fonts.caption2};
  color: ${theme.colors.g5};
  padding: 5px;
`;

const commonStyles = `
  padding: 0.5rem 0.75rem;
  justify-content: center;
  align-items: center;
  display: inline-block; 
`;

const MyBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const YourBox = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const YourChat = styled.div`
  ${commonStyles}
  border-radius: 0.75rem;
  background-color: ${theme.colors.g2};

  display: inline-block;
`;

const MyChat = styled.div`
  ${commonStyles}
  border-radius: 0.75rem;
  background-color: ${theme.colors.purple};
  color: white;
  display: inline-block;
`;

const Wrapper = styled.div`
  margin: 3px;
`;

const ChatWrapperTail = styled.div`
  ${commonStyles}
  border-radius: 0rem 0.75rem 0.75rem 0.75rem;
`;

const ChatWrapper = styled.div`
  ${commonStyles}
  border-radius: 0.75rem;
`;

export default ChatBox;
