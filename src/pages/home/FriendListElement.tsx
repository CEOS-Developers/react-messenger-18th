import styled from 'styled-components';
import { ReactComponent as DefaultProfileIcon } from 'static/images/default-profile-icon.svg';
import { TUser } from 'types';

interface FriendListElementProps {
  user: TUser;
}

const FriendListElement = ({ user }: FriendListElementProps) => {
  return (
    <FriendListElementContainer>
      <ProfileImageConatiner>
        {user.profileImage ? (
          <img src={user.profileImage} alt="profile" />
        ) : (
          <DefaultProfileIcon />
        )}
      </ProfileImageConatiner>
      <div className="username">{user.name}</div>
    </FriendListElementContainer>
  );
};

const FriendListElementContainer = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 0;
  margin-bottom: 8px;
  .username {
    color: black;
    font-size: 14px;
  }
`;

const ProfileImageConatiner = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 14px;
  img,
  svg {
    width: 36px;
    height: 36px;
  }
`;

export default FriendListElement;
