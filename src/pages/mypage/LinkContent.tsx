import React, { MouseEvent } from "react";
import { styled } from "styled-components";

interface LinkContentProps {
  imageUrl: string;
  url: string;
  text: string;
}

const LinkContent: React.FC<LinkContentProps> = ({ imageUrl, url, text }) => {
  const openExternalLink = (event: MouseEvent) => {
    window.open(url, "_blank");
  };

  return (
    <LinkContainer onClick={openExternalLink}>
      <img src={imageUrl} alt={text} height="32" width="32" />
      <LinkName>{text}</LinkName>
      <LinkVectorWrapper>
        <img src="/assets/link.svg" alt="link" height="16" width="16" />
      </LinkVectorWrapper>
    </LinkContainer>
  );
};

export default LinkContent;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
`;

const LinkName = styled.div`
  font-size: 17px;
  font-weight: 400;
  line-height: 140%;
  padding-left: 12px;
`;

const LinkVectorWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  padding: 4px;
`;
