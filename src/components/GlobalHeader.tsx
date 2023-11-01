import Icon from "pages/chatroom/icon";
import React, { ReactElement, ReactNode } from "react";
import { styled } from "styled-components";

interface GlobalHeaderProps {
  headText: string;
  leftChild: ReactNode;
}

const GlobalHeader: React.FC<GlobalHeaderProps> = ({
  headText,
  leftChild,
}: GlobalHeaderProps): ReactElement => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeadText>{headText}</HeadText>
        <RightItems>
          <div className="head_btn_left">{leftChild}</div>
          <Icon size={28} icon="menu" />
        </RightItems>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default GlobalHeader;

const HeaderContainer = styled.header`
  display: flex;
  padding: 12px;
  flex-direction: column;
  justify-content: center;
`;

const HeaderContent = styled.div`
  display: flex;
  width: 351px;
  height: 36px;
  justify-content: space-between;
  align-items: center;
`;

const HeadText = styled.div`
  display: flex;
  padding-left: 6px;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  color: #33333a;
  align-items: center;
  padding-top: 2px;
`;

const RightItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 4px;
  padding-top: 8px;
`;
