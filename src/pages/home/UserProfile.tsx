import styled from 'styled-components';
import { ReactComponent as DefaultProfileIcon } from 'static/images/default-profile-icon.svg';
import { ReactComponent as MoreOnIcon } from 'static/images/more-on-icon.svg';
import { ReactComponent as MoreOffIcon } from 'static/images/more-off-icon.svg';
import ButtonWithIcon from 'pages/common/ButtonWithIcon';

interface UserProfileProps {
  isStatusMessageSpread: boolean;
  spreadStatusMessage: () => void;
  foldStatusMessage: () => void;
}
const UserProfile = ({
  isStatusMessageSpread,
  spreadStatusMessage,
  foldStatusMessage,
}: UserProfileProps) => {
  const message =
    '상테메시지상테메시지상테메시지상테메시지상테메시지상테메시지상테메시지상테메시지상테메시지상테메시지상테메시지상테메시지상테메시지상테메시지';

  return (
    <UserProfileContainer $isStatusMessageSpread={isStatusMessageSpread}>
      <div className="profile-body">
        <div className="profile-info">
          <div className="username">배수연</div>
          <StatusMessage $isStatusMessageSpread={isStatusMessageSpread}>
            <div className="message">{message}</div>
            <ButtonWithIcon
              children={
                isStatusMessageSpread ? (
                  <MoreOnIcon onClick={foldStatusMessage} />
                ) : (
                  <MoreOffIcon onClick={spreadStatusMessage} />
                )
              }
            />
          </StatusMessage>
        </div>
        <ProfileImageConatiner>
          <DefaultProfileIcon />
        </ProfileImageConatiner>
      </div>
    </UserProfileContainer>
  );
};

const UserProfileContainer = styled.div<{
  $isStatusMessageSpread: boolean;
}>`
  width: 100%;
  ${(props) =>
    props.$isStatusMessageSpread
      ? 'position: fixed; top: 0px; bottom: 0;'
      : 'height: 76px;'};

  background-color: var(--gray-30, rgba(0, 0, 0, 0.3));

  .profile-body {
    padding: 0 12px 12px 12px;
    padding-top: ${(props) => (props.$isStatusMessageSpread ? '26px' : '0px')};
    background-color: var(--Background-White);
    display: flex;
    .profile-info {
      margin-top: 4px;
      flex: 1;
      .username {
        height: 32px;
        font-size: 20px;
        font-weight: 600;
        line-height: 160%;
      }
    }
  }
`;

const StatusMessage = styled.div<{
  $isStatusMessageSpread: boolean;
}>`
  display: flex;
  .message {
    color: var(--Gray-2);
    margin-top: 4px;
    margin-right: 8px;
    font-size: 14px;
    line-height: 160%;
    width: 250px;
    ${(props) =>
      props.$isStatusMessageSpread
        ? ''
        : 'text-overflow: ellipsis; white-space: nowrap; overflow: hidden;'};
  }
`;

const ProfileImageConatiner = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  margin-top: 9px;
  margin-right: 4px;
  img,
  svg {
    width: 44px;
    height: 44px;
  }
`;

export default UserProfile;
