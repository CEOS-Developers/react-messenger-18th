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
      <ProfileSmallIcon width={56} height={56} />
      <RightWrapper>
        <RightWrapperTop>
          <SubText>{userName}</SubText>
          <Caption>{latestTime}</Caption>
        </RightWrapperTop>
        <RightWrapperBottom>
          <Caption>{comment}</Caption>
          <NewNum>{newNum}</NewNum>
        </RightWrapperBottom>
      </RightWrapper>
    </Wrapper>
  );
};

const SubText = styled.div`
  font-style: ${theme.fonts.subText};
`;

const Caption = styled.div`
  font-style: ${theme.fonts.caption1};
  color: ${theme.colors.g4};
`;

const NewNum = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-style: ${theme.fonts.caption1};
  background-color: ${theme.colors.purple};
  border-radius: 99px;
  width: 20px;
  height: 20px;
`;
const RightWrapperBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const RightWrapperTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  gap: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-top: 1rem;
  padding-bottom: 1rem;

  border-bottom: 1px solid ${theme.colors.g2};

  width: 100%;
`;
export default ChatListBox;
