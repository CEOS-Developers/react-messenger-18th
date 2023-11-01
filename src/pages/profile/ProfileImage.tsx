import styled from 'styled-components';
import { ReactComponent as DefaultProfileIcon } from 'static/images/default-profile-icon.svg';
import { ReactComponent as CameraIcon } from 'static/images/camera-icon.svg';
import { CompressImage } from 'utils/fileCompression';
import { memo } from 'react';

interface ProfileImageProps {
  isProfileChanging: boolean;
  newProfileImage: string | null;
  setNewProfileImage: React.Dispatch<React.SetStateAction<string | null>>;
}

const ProfileImage = ({
  isProfileChanging,
  newProfileImage,
  setNewProfileImage,
}: ProfileImageProps) => {
  return (
    <ProfileImageOuter>
      <ProfileImageConatiner>
        {newProfileImage ? (
          <img src={newProfileImage} alt="profile" />
        ) : (
          <DefaultProfileIcon />
        )}
      </ProfileImageConatiner>
      {isProfileChanging ? (
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
                      setNewProfileImage(reader.result.toString());
                    }
                  };
                }
              }
            }}
          />
        </ProfileImageChangeButton>
      ) : null}
    </ProfileImageOuter>
  );
};

const ProfileImageOuter = styled.div`
  .profile-image-outer {
    position: relative;
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
  background: var(--Gray-1);
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

export default memo(ProfileImage);
