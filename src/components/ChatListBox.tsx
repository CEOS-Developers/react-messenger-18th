import React from 'react';
import styled from 'styled-components';
import theme from '../style/theme';
import ProfileSmallIcon from '../static/ProfileSmallIcon';
import ProfileIcon from '../static/PropfileIcon';

interface ChatListBoxProps {
  userName: string;
  comment: string;
  newNum: number;
  latestTime: string;
}

const ChatListBox: React.FC<ChatListBoxProps> = ({
  userName,
  comment,
  newNum,
  latestTime,
}) => {
  return (
    <Wrapper>
      <ProfileSmallIcon />
      <RightWrapper>
        <RightWrapperTop>
          {userName}
          {latestTime}
        </RightWrapperTop>
        <RightWrapperBottom>
          {comment}
          {newNum}
        </RightWrapperBottom>
      </RightWrapper>
    </Wrapper>
  );
};

const RightWrapperBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RightWrapperTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;

  border-bottom: 1px solid ${theme.colors.g2};
`;
export default ChatListBox;
