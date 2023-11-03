import React from 'react';
import NextIcon from '../static/NextIcon';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../style/theme';

interface ProfileLinkProps {
  imageUrl: string;
  title: string;
  linkTo: string;
}

const ProfileLink: React.FC<ProfileLinkProps> = ({
  imageUrl,
  title,
  linkTo,
}) => {
  return (
    <Wrapper>
      <LeftWrapper>
        <img src={imageUrl} alt={title} />
        {title}
      </LeftWrapper>

      <Link to={linkTo}>
        <NextIcon />
      </Link>
    </Wrapper>
  );
};

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  font-style: ${theme.fonts.body2};
  padding-left: 1rem;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1.5px solid ${theme.colors.g2};

  padding: 1rem;
`;

export default ProfileLink;
