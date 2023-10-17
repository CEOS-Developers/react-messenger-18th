import React from "react";
import styled from "styled-components";
import { ButtonProps } from "../../commonprops/button/buttonProps";

export default function RoleButton({ text }: Partial<ButtonProps>) {
  return (
    <ButtonWrapper>
      <span>{text}</span>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.mainColor};
  span {
    color: ${(props) => props.theme.colors.white};
    ${(props) => props.theme.fontStyles.body3};
    font-size: 1.2rem;
    font-weight: 500;
  }
`;
