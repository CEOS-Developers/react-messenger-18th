import React, { ReactNode } from "react";
import styled from "styled-components";

interface PageHeaderProps {
  leftIcon: ReactNode;
  title?: string;
  rightIcon1: ReactNode;
  rightIcon2?: ReactNode;
  addClass?: string;
  onClick?: () => void;
}

export default function PageHeader({
  leftIcon,
  title,
  rightIcon1,
  rightIcon2,
  addClass,
  onClick,
}: PageHeaderProps) {
  return (
    <PageHeaderWrapper $addClass={addClass}>
      <LeftIconContainer>
        {leftIcon}
        {title ? <span onClick={onClick}>{title}</span> : null}
      </LeftIconContainer>
      <RightIconContainer>
        {rightIcon1}
        {rightIcon2 ? rightIcon2 : null}
      </RightIconContainer>
    </PageHeaderWrapper>
  );
}

const PageHeaderWrapper = styled.header<{ $addClass?: string }>`
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    cursor: pointer;
  }
  padding: 0 2rem;
  ${(props) => props.$addClass}
`;

const LeftIconContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  span {
    margin-left: 0.8rem;
    ${(props) => props.theme.fontStyles.headLine1}
    font-size:1.8rem;
    color: rgba(79, 79, 79, 1);
  }
`;

const RightIconContainer = styled.div`
  display: flex;
  align-items: center;
`;
