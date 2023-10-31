import React, { ReactNode } from "react";
import styled from "styled-components";

interface LinkButtonProps {
  icon?: ReactNode;
  text: string;
}

export function LinkButton({ icon, text }: LinkButtonProps) {
  return (
    <LinkBtnWrapper>
      <div>{icon}</div>
      <MediaName>
        <span>{text}</span>
      </MediaName>
    </LinkBtnWrapper>
  );
}

const LinkBtnWrapper = styled.button`
  width: 11.2rem;
  height: 7.8rem;
`;

const MediaName = styled.div`
  margin-top: 0.4rem;
  span {
    ${(props) => props.theme.fontStyles.body2}
  }
`;
