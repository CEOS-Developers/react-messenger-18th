import React, { ReactNode } from "react";
import styled from "styled-components";

interface ContactUserBtnProps {
  icon: ReactNode;
  text: string;
  addClass?: string;
}

export function ContactUserBtn({ icon, text, addClass }: ContactUserBtnProps) {
  return (
    <ContactBtnWrapper $addClass={addClass}>
      <IconWrapper>
        <span>{icon}</span>
      </IconWrapper>
      <BtnText>
        <span>{text}</span>
      </BtnText>
    </ContactBtnWrapper>
  );
}

const ContactBtnWrapper = styled.button<{ $addClass?: string }>`
  width: 16.4rem;
  height: 7.7rem;
  padding: 1.2rem 2rem;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.white};
  ${(props) => props.$addClass}
`;

const IconWrapper = styled.div`
  margin-bottom: 0.8rem;
`;

const BtnText = styled.div`
  span {
    ${(props) => props.theme.fontStyles.body2};
    font-size: 1.4rem;
  }
`;
