/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import { useUserStore } from 'stores/userStore';
import { useEffect, useState } from 'react';
import ProfileImage from 'pages/profile/ProfileImage';
import Username from 'pages/profile/Username';
import StatusMessage from 'pages/profile/StatusMessage';

interface UserProfileProps {
  username: string;
  isProfileChanging: boolean;
  profileImage: string | null;
  statusMessage: string | null;
}

const UserProfile = ({
  username,
  isProfileChanging,
  profileImage,
  statusMessage,
}: UserProfileProps) => {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const [newName, setNewName] = useState<string>(username);
  const [newStatusMessage, setNewStatusMessage] = useState<string | null>(
    statusMessage
  );
  const [newProfileImage, setNewProfileImage] = useState<string | null>(
    profileImage
  );

  // 프로필 변경 모드가 바뀔 때 프로필에 변경사항이 있다면 전역 user state 업데이트
  useEffect(() => {
    if (username !== newName) setUser({ ...user, name: newName });
    if (statusMessage !== newStatusMessage)
      setUser({ ...user, statusMessage: newStatusMessage });
    if (profileImage !== newProfileImage)
      setUser({ ...user, profileImage: newProfileImage });
  }, [isProfileChanging]);

  return (
    <UserProfileContainer>
      <ProfileImage
        isProfileChanging={isProfileChanging}
        newProfileImage={newProfileImage}
        setNewProfileImage={setNewProfileImage}
      />
      <Username
        isProfileChanging={isProfileChanging}
        username={username}
        newName={newName}
        setNewName={setNewName}
      />
      <StatusMessage
        isProfileChanging={isProfileChanging}
        statusMessage={statusMessage}
        newStatusMessage={newStatusMessage}
        setNewStatusMessage={setNewStatusMessage}
      />
    </UserProfileContainer>
  );
};

const UserProfileContainer = styled.div`
  margin-top: 66px;
  margin-bottom: 8px;
  width: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default UserProfile;
