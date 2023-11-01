import { memo } from 'react';
import styled from 'styled-components';

interface UserNameProps {
  isProfileChanging: boolean;
  username: string;
  newName: string;
  setNewName: React.Dispatch<React.SetStateAction<string>>;
}

const UserName = ({
  isProfileChanging,
  username,
  newName,
  setNewName,
}: UserNameProps) => {
  return (
    <UsernameOuter>
      {isProfileChanging ? (
        <input
          type="text"
          className="username-input"
          value={newName}
          onChange={(e) => {
            if (e.target.value.length < 10) setNewName(e.target.value);
          }}
        />
      ) : (
        <div className="username">{username}</div>
      )}
    </UsernameOuter>
  );
};

const UsernameOuter = styled.div`
  display: flex;
  position: relative;
  margin-top: 20px;
  .username {
    font-size: 20px;
    font-weight: 600;
    line-height: 160%;
  }
  .username-input {
    text-align: center;
    border: none;
    color: var(--Gray-2);
    padding: 6px 12px;
    border-radius: 4px;
    background: var(--Gray-1);
    font-size: 14px;
  }
`;

export default memo(UserName);
