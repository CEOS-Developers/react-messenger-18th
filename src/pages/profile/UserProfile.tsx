import styled from 'styled-components';
import { ReactComponent as DefaultProfileIcon } from 'static/images/default-profile-icon.svg';
import { ReactComponent as CameraIcon } from 'static/images/camera-icon.svg';
import { useUserStore } from 'stores/userStore';
import { CompressImage } from 'utils/fileCompression';

interface UserProfileProps {
  username: string;
  profileImage: string | null;
  statusMessage: string | null;
}

const UserProfile = ({
  username,
  profileImage,
  statusMessage,
}: UserProfileProps) => {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  return (
    <UserProfileContainer>
      <div className="profile-image-outer">
        <ProfileImageConatiner>
          {profileImage ? (
            <img src={profileImage} alt="profile" />
          ) : (
            <DefaultProfileIcon />
          )}
        </ProfileImageConatiner>
        <ProfileImageChangeButton>
          <CameraIcon />
          <input
            type="file"
            accept="image/* .heic .heif"
            onChange={async (e) => {
              if (e.target.files && e.target.files.length) {
                const compressedFile = await CompressImage(e.target.files[0]);
                if (compressedFile) {
                  const reader = new FileReader();
                  reader.readAsDataURL(compressedFile);
                  reader.onloadend = () => {
                    if (reader.result) {
                      setUser({
                        ...user,
                        profileImage: reader.result.toString(),
                      });
                    }
                  };
                }
              }
            }}
          />
        </ProfileImageChangeButton>
      </div>

      <div className="username">{username}</div>
      <div className="status-message">{statusMessage}</div>
    </UserProfileContainer>
  );
};
const UserProfileContainer = styled.div`
  margin-top: 66px;
  margin-bottom: 8px;
  width: 100%;
  padding: 0 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .profile-image-outer {
    position: relative;
  }
  .username {
    margin-top: 20px;
    font-size: 20px;
    font-weight: 600;
    line-height: 160%;
  }
  .status-message {
    text-align: center;
    padding-bottom: 12px;
    white-space: pre-wrap;
    width: 100%;
    margin-top: 4px;
    color: var(--Gray-2);
    font-size: 14px;
    line-height: 160%;
    border-bottom: 1px solid var(--Gray-2);
  }
`;

const ProfileImageConatiner = styled.div`
  width: 108px;
  height: 108px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  //   margin-top: 9px;
  //   margin-right: 4px;
  img,
  svg {
    width: 108px;
    height: 108px;
  }
`;

const ProfileImageChangeButton = styled.label`
  position: absolute;
  bottom: 5px;
  right: 5px;
  background-color: rgb(255, 255, 255, 1);
  border-radius: 50%;
  z-index: 100;
  border: 1px solid black;
  height: 22px;
  width: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 20px;
    height: 20px;
  }
  input {
    display: none;
  }
`;

export default UserProfile;
