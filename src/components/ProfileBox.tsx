import React from 'react';
import styled from 'styled-components';
import theme from '../style/theme';
import ProfileSmallIcon from '../static/ProfileSmallIcon';
import ProfileIcon from '../static/PropfileIcon';

interface ProfileBoxProps {
  userName: string;
  comment: string;
}

const ProfileBox: React.FC<ProfileBoxProps> = ({ userName, comment }) => {
  return (
    <Wrapper>
      <LeftWrapper>
        <ProfileSmallIcon />
        <Name>{userName}</Name>
      </LeftWrapper>

      <Comment>{comment}</Comment>
    </Wrapper>
  );
};

const Comment = styled.div`
  font-style: ${theme.fonts.caption2};
  color: ${theme.colors.g5};
`;
const Name = styled.div`
  font-style: ${theme.fonts.body1};
`;
const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  gap: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;

  border-bottom: 1px solid ${theme.colors.g2};
`;
export default ProfileBox;
