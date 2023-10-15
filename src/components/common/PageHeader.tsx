import React, { ReactNode } from "react";
import styled from "styled-components";

interface PageHeaderProps {
  leftIcon: ReactNode;
  title?: string;
  people?: number;
  rightIcon1: ReactNode;
  rightIcon2?: ReactNode;
  addClass?: string;
  onClick?: () => void;
}

export default function PageHeader({
  leftIcon,
  title,
  people,
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
        {people ? <span>{people}</span> : null}
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
  span:nth-child(2) {
    margin-left: 0.8rem;
    ${(props) => props.theme.fontStyles.headLine1}
    font-size:1.8rem;
    color: ${(props) => props.theme.colors.gray2};
  }
  span:last-child {
    margin-left: 0.4rem;
    ${(props) => props.theme.fontStyles.headLine1}
    font-size:1.8rem;
    color: ${(props) => props.theme.colors.gray4};
  }
`;

const RightIconContainer = styled.div`
  display: flex;
  align-items: center;
`;
