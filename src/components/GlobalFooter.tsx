import React from "react";
import GlobalButton from "./GlobalButton";
import { styled } from "styled-components";

const GlobalFooter: React.FC = () => {
  return (
    <FooterContainer>
      <GlobalButton
        text="Button 1"
        customType="friend"
        onClick={() => alert("Button 1 clicked")}
      />
      <GlobalButton
        text="Button 2"
        customType="chat"
        onClick={() => alert("Button 2 clicked")}
      />
      <GlobalButton
        text="Button 3"
        customType="mypage"
        onClick={() => alert("Button 3 clicked")}
      />
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
`;
