import UserLink from 'pages/profile/UserLink';
import UserProfile from 'pages/profile/UserProfile';
import styled from 'styled-components';
import { ReactComponent as InstagramIcon } from 'static/images/instagram-icon.svg';
import { ReactComponent as GithubIcon } from 'static/images/github-icon.svg';
import { ReactComponent as BehanceIcon } from 'static/images/behance-icon.svg';
import { useUserStore } from 'stores/userStore';
import { useState } from 'react';
import ProfileHeader from 'pages/profile/ProfileHeader';

const Profile = () => {
  const user = useUserStore((state) => state.user);
  const [isProfileChanging, setIsProfileChanging] = useState<boolean>(false);

  return (
    <ProfileContainer>
      <ProfileHeader
        isProfileChanging={isProfileChanging}
        handleClickProfileChangeButton={() => {
          setIsProfileChanging((state) => !state);
        }}
      />
      <UserProfile
        username={user.name}
        isProfileChanging={isProfileChanging}
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
  padding: 20px 16px;
  background-color: var(--Background-White);
`;

export default Profile;
