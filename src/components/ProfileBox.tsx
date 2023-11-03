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
        <ProfileIcon />
        {userName}
      </LeftWrapper>

      {comment}
    </Wrapper>
  );
};

const LeftWrapper = styled.div``;
const Wrapper = styled.div``;
export default ProfileBox;
