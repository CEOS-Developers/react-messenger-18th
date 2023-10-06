import React from "react";
import styled from "styled-components";
import { ReactComponent as BottomArrow } from "../../icons/arrows/bottomarrow.svg";

interface ChipButtonProps {
  text: string;
}

export default function ChipButton({ text }: ChipButtonProps) {
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
  width: 100%;
  height: 2.8rem;
  padding: 0.2rem 0.8rem;
  background-color: ${(props) => props.theme.colors.mainColorLight};
`;

const FieldText = styled.div`
  display: flex;
  justify-content: center;
  span {
    color: ${(props) => props.theme.colors.mainColor};
    ${(props) => props.theme.fontStyles.body1};
    font-weight: 500;
  }
`;
