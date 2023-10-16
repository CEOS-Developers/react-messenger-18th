import React from "react";
import styled from "styled-components";
import { ReactComponent as BottomArrow } from "../../icons/arrows/bottomarrow.svg";
import { ButtonProps } from "../../props/button/buttonProps";

export default function ChipButton({ text }: Partial<ButtonProps>) {
  return (
    <ButtonWrapper>
      <FieldText>
        <span>{text}</span>
        <BottomArrow />
      </FieldText>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  width: 10rem;
  height: 2.8rem;
  padding: 0.2rem 0.4rem 0.2rem 0.8rem;
  border-radius: 0.4rem;
  background-color: ${(props) => props.theme.colors.mainColor};
`;

const FieldText = styled.div`
  display: flex;
  justify-content: center;
  span {
    color: ${(props) => props.theme.colors.white};
    ${(props) => props.theme.fontStyles.body1};
    font-weight: 500;
  }
`;
