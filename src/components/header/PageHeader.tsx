import React, { ReactComponentElement, ReactNode } from "react";
import styled from "styled-components";

interface PageHeaderProps {
  leftIcon: ReactNode;
  title?: string;
  rightIcon1: ReactNode;
  rightIcon2?: ReactNode;
}

export default function PageHeader({
  leftIcon,
  title,
  rightIcon1,
  rightIcon2,
}: PageHeaderProps) {
  return (
    <PageHeaderWrapper>
      <LeftIconContainer>
        {leftIcon}
        {title ? <span>{title}</span> : null}
      </LeftIconContainer>
      <RightIconContainer>
        {rightIcon1}
        {rightIcon2 ? <span>{rightIcon2}</span> : null}
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
  span {
    margin-left: 1.8rem;
    cursor: pointer;
  }
`;
