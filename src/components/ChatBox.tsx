import React from 'react';
import styled from 'styled-components';
import theme from '../style/theme';
import ProfileSmallIcon from '../static/ProfileSmallIcon';

// 채팅 박스의 입력 프로퍼티를 정의하는 인터페이스
interface ChatBoxProps {
  isMe: boolean;
  isFirst: boolean;
  text: string;
  hasTail: boolean;
  time: string;
  user: string;
}

// ChatBoxProps를 사용하여 채팅 박스 컴포넌트를 정의
const ChatBox: React.FC<ChatBoxProps> = ({
  text,
  hasTail,
  isMe,
  time,
  isFirst,
  user,
}) => {
  return (
    <Wrapper>
      {isMe && (
        <MyBox>
          <Time>{time}</Time>
          <MyChat
            style={
              isFirst ? { borderRadius: '0.75rem  0rem 0.75rem 0.75rem' } : {}
            }
          >
            {text}
          </MyChat>
        </MyBox>
      )}
      {!isMe && !isFirst && (
        <YourBox>
          <YourChat style={{ marginLeft: '45px' }}>{text}</YourChat>
          <Time>{time}</Time>
        </YourBox>
      )}
      {!isMe && isFirst && (
        <YourBox>
          <div style={{ width: '36px' }}>
            <ProfileSmallIcon />
          </div>

          <div>
            <UserName>{user}</UserName>
            <YourChat style={{ borderRadius: '0rem 0.75rem 0.75rem 0.75rem' }}>
              {text}
            </YourChat>
          </div>

          <Time>{time}</Time>
        </YourBox>
      )}
    </Wrapper>
  );
};

const UserName = styled.div`
  font-size: ${theme.fonts.caption1};
  padding-bottom: 5px;
  padding-top: 2px;
`;

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
  gap: 10px;

  font-size: ${theme.fonts.body2};
`;
const YourChat = styled.div`
  ${commonStyles}
  border-radius: 0.75rem;
  background-color: ${theme.colors.g2};
  overflow: hidden;
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
  margin: 10px;
`;

export default ChatBox;
