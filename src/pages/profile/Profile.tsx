import UserLink from 'pages/profile/UserLink';
import UserProfile from 'pages/profile/UserProfile';
import styled from 'styled-components';
import { ReactComponent as BackIcon } from 'static/images/back-arrow-icon.svg';
import ButtonWithIcon from 'pages/common/ButtonWithIcon';
import { ReactComponent as InstagramIcon } from 'static/images/instagram-icon.svg';
import { ReactComponent as GithubIcon } from 'static/images/github-icon.svg';
import { ReactComponent as BehanceIcon } from 'static/images/behance-icon.svg';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from 'stores/userStore';

const Profile = () => {
  const user = useUserStore((state) => state.user);

  const navigate = useNavigate();
  return (
    <ProfileContainer>
      <BackButton
        children={<BackIcon />}
        handleClickButton={() => {
          navigate('/');
        }}
      />
      <UserProfile
        username={user.name}
        profileImage={user.profileImage}
        statusMessage={user.statusMessage}
      />
      <UserLink
        children={<InstagramIcon />}
        linkName="Instagram"
        href={user.instagram}
      />
      <UserLink
        children={<GithubIcon />}
        linkName="Github"
        href={user.github}
      />
      <UserLink
        children={<BehanceIcon />}
        linkName="Behance"
        href={user.behance}
      />
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 0 0 16px;
  background-color: var(--Background-White);
`;

const BackButton = styled(ButtonWithIcon)`
  width: 28px;
  height: 28px;
`;
export default Profile;
