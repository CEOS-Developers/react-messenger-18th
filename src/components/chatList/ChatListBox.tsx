import React, { ReactNode } from "react";
import styled from "styled-components";
import Profile from "../profile/Profile";

interface ChatListBoxProps {
  img: string;
  mainText: string;
  subText: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export default function ChatListBox({
  img,
  mainText,
  subText,
  icon,
  onClick,
}: ChatListBoxProps) {
  return (
    <BoxWrapper onClick={onClick}>
      <Profile $img={img} $size="5.6rem" />
      <TextBox>
        <MainText>
          <span>{mainText}</span>
          {icon}
        </MainText>
        <SubText>
          <span>{subText}</span>
        </SubText>
      </TextBox>
    </BoxWrapper>
  );
}

const BoxWrapper = styled.div`
  padding: 1.2rem 0;
  display: flex;
  cursor: pointer;
`;

const TextBox = styled.div`
  margin-left: 1.2rem;
`;

const MainText = styled.div`
  span {
    ${(props) => props.theme.fontStyles.headLine2};
    margin-right: 0.4rem;
  }
  display: flex;
  align-items: center;
  margin: 0.3rem 0 0.2rem 0;
`;

const SubText = styled.div`
  span {
    ${(props) => props.theme.fontStyles.body2};
    color: ${(props) => props.theme.colors.gray1};
    font-size: 1.4rem;
  }
  display: flex;
  align-items: center;
  margin-top: -0.3rem;
`;
