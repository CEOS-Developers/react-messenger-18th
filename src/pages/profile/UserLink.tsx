import { ReactNode } from 'react';
import { ReactComponent as RightArrowIcon } from 'static/images/right-arrow-icon.svg';
import styled from 'styled-components';

interface UserLinkProps {
  children: ReactNode;
  linkName: string;
  href: string | null;
}
const UserLink = ({ children, linkName, href }: UserLinkProps) => {
  return (
    <UserLinkContainer href={href || ''}>
      {children}
      <div className="link-name">{linkName}</div>
      <RightArrowIcon />
    </UserLinkContainer>
  );
};

const UserLinkContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
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
    font-family: Pretendard Variable;
    font-size: 12px;
    font-weight: 300;
    line-height: 120%;
  }
`;

export default UserLink;
