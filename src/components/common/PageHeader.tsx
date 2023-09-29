import React, { ReactNode } from "react";
import styled from "styled-components";

interface PageHeaderProps {
  leftIcon: ReactNode;
  title?: string;
  rightIcon1: ReactNode;
  rightIcon2?: ReactNode;
  onClick?: () => void;
}

export default function PageHeader({
  leftIcon,
  title,
  rightIcon1,
  rightIcon2,
  onClick,
}: PageHeaderProps) {
  return (
    <PageHeaderWrapper>
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

const PageHeaderWrapper = styled.header`
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    cursor: pointer;
  }
  padding: 0 2rem;
`;

const LeftIconContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  span {
    margin-left: 1.8rem;
    ${(props) => props.theme.fontStyles.headLine1}
  }
`;

const RightIconContainer = styled.div`
  display: flex;
  align-items: center;
`;
