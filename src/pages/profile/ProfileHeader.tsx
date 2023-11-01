import styled from 'styled-components';
import { ReactComponent as BackIcon } from 'static/images/back-arrow-icon.svg';
import { ReactComponent as PencilIcon } from 'static/images/pencil-bold-icon.svg';
import ButtonWithIcon from 'pages/common/ButtonWithIcon';
import { useNavigate } from 'react-router-dom';

interface ProfileHeaderProps {
  isProfileChanging: boolean;
  handleClickProfileChangeButton: () => void;
}
const ProfileHeader = ({
  isProfileChanging,
  handleClickProfileChangeButton,
}: ProfileHeaderProps) => {
  const navigate = useNavigate();

  return (
    <ProfileHeaderContainer>
      <ButtonWithIcon
        children={<BackIcon />}
        handleClickButton={() => {
          navigate('/');
        }}
        size={28}
      />
      {isProfileChanging ? (
        <button className="okButton" onClick={handleClickProfileChangeButton}>
          확인
        </button>
      ) : (
        <ButtonWithIcon
          children={<PencilIcon />}
          handleClickButton={handleClickProfileChangeButton}
          size={28}
        />
      )}
    </ProfileHeaderContainer>
  );
};

const ProfileHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .okButton {
    height: 28px;
    font-size: 16px;
    color: black;
  }
`;

export default ProfileHeader;
