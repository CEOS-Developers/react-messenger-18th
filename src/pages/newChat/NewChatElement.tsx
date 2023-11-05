import styled from 'styled-components';
import { TUser } from 'types';
import { ReactComponent as DefaultProfileIcon } from 'static/images/default-profile-icon.svg';

interface NewChatElementProps {
  user: TUser;
  checked: boolean;
  handleChange: () => void;
}

const NewChatElement = ({
  user,
  checked,
  handleChange,
}: NewChatElementProps) => {
  return (
    <NewChatElementContainer>
      <ProfileImageConatiner>
        {user.profileImage ? (
          <img src={user.profileImage} alt="profile" />
        ) : (
          <DefaultProfileIcon />
        )}
      </ProfileImageConatiner>
      <div className="username">{user.name}</div>
      <input
        type="radio"
        name="user"
        checked={checked}
        onChange={handleChange}
      />
    </NewChatElementContainer>
  );
};

const NewChatElementContainer = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  text-align: start;
  padding: 8px 0;
  margin-bottom: 8px;
  .username {
    color: black;
    font-size: 14px;
    flex: 1;
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
  }
`;

export default NewChatElement;
