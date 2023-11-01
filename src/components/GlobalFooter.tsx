import React, { ReactElement, ReactNode } from "react";
import { styled } from "styled-components";

interface GlobalFooterProps {
  friendBtn: ReactNode;
  chatBtn: ReactNode;
  mypageBtn: ReactNode;
}

const GlobalFooter: React.FC<GlobalFooterProps> = ({
  friendBtn,
  chatBtn,
  mypageBtn,
}: GlobalFooterProps): ReactElement => {
  return (
    <FooterContainer>
      <div className="friendBtn">{friendBtn}</div>
      <div className="chatBtn">{chatBtn}</div>
      <div className="mypageBtn">{mypageBtn}</div>
    </FooterContainer>
  );
};

export default GlobalFooter;

const FooterContainer = styled.header`
  display: flex;
  padding: 0px 61px 0px 62px;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 0;
  gap: 24px;
  border-top: 0.33px solid #b8b7ca;
  padding-top: 8px;
};`;
