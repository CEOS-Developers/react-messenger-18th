import styled from 'styled-components';
import { ReactComponent as DefaultProfileIcon } from 'static/images/default-profile-icon.svg';

const FriendListElement = () => {
  return (
    <FriendListElementContainer>
      <ProfileImageConatiner>
        <DefaultProfileIcon />
      </ProfileImageConatiner>
      <div className="username">배수연</div>
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
