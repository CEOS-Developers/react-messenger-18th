import { ReactNode } from 'react';
import { ReactComponent as RightArrowIcon } from 'static/images/right-arrow-icon.svg';
import styled from 'styled-components';

interface UserLinkProps {
  children: ReactNode;
  linkName: string;
}
const UserLink = ({ children, linkName }: UserLinkProps) => {
  return (
    <UserLinkContainer>
      {children}
      <div className="link-name">{linkName}</div>
      <RightArrowIcon />
    </UserLinkContainer>
  );
};

const UserLinkContainer = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0 28px 0 32px;
  margin-bottom: 4px;
  svg {
    width: 28px;
    height: 28px;
    margin-right: 9px;
  }
  .link-name {
    flex: 1;
    color: black;
    // font-family: Pretendard Variable;
    font-size: 12px;
    font-weight: 300;
    line-height: 120%;
  }
`;

export default UserLink;
