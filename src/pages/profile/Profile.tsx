import UserLink from 'pages/profile/UserLink';
import UserProfile from 'pages/profile/UserProfile';
import styled from 'styled-components';
import { ReactComponent as BackIcon } from 'static/images/back-arrow-icon.svg';
import ButtonWithIcon from 'pages/common/ButtonWithIcon';
import { ReactComponent as InstagramIcon } from 'static/images/instagram-icon.svg';
import { ReactComponent as GithubIcon } from 'static/images/github-icon.svg';
import { ReactComponent as BehanceIcon } from 'static/images/behance-icon.svg';

const Profile = () => {
  return (
    <ProfileContainer>
      <BackButton children={<BackIcon />} />
      <UserProfile />
      <UserLink children={<InstagramIcon />} linkName="Instagram" />
      <UserLink children={<GithubIcon />} linkName="Github" />
      <UserLink children={<BehanceIcon />} linkName="Behance" />
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--Background-White);
`;

const BackButton = styled(ButtonWithIcon)`
  padding: 20px 0 0 16px;
`;
export default Profile;
