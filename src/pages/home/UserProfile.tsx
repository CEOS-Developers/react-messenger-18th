import styled from 'styled-components';
import { ReactComponent as DefaultProfileIcon } from 'static/images/default-profile-icon.svg';
import { ReactComponent as MoreOnIcon } from 'static/images/more-on-icon.svg';
import { ReactComponent as MoreOffIcon } from 'static/images/more-off-icon.svg';
import ButtonWithIcon from 'pages/common/ButtonWithIcon';

const UserProfile = () => {
  return (
    <UserProfileContainer>
      <div className="profile-body">
        <div className="profile-info">
          <div className="username">배수연</div>
          <StatusMessage>
            <div className="message">
              상태메시지입니다.상태메시지입니다.상태메시지입
            </div>
            {/* <ButtonWithIcon children={<MoreOffIcon />} /> */}
          </StatusMessage>
        </div>
        <ProfileImageConatiner>
          <DefaultProfileIcon />
        </ProfileImageConatiner>
      </div>
    </UserProfileContainer>
  );
};

const UserProfileContainer = styled.div`
  width: 100%;
  height: 74px;
  //   position: fixed;
  //   top: 0;
  //   bottom: 0;
  background-color: var(--gray-30, rgba(0, 0, 0, 0.3));
  .profile-body {
    padding: 0 12px 12px 12px;
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

const StatusMessage = styled.div`
  display: flex;
  margin-top: 4px;
  .message {
    color: var(--Gray-2);
    font-size: 14px;
    line-height: 160%;
  }
`;

const ProfileImageConatiner = styled.div`
  width: 46.8px;
  height: 46.8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  margin-top: 5px;
  margin-right: 4px;
  img,
  svg {
    width: 46.8px;
    height: 46.8px;
  }
`;

export default UserProfile;
