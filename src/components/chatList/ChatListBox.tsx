import React, { ReactNode } from "react";
import styled from "styled-components";
import Profile from "../profile/Profile";

interface ChatListBoxProps {
  img: string;
  mainText: string;
  subText: string;
  icon?: ReactNode;
}

export default function ChatListBox({
  img,
  mainText,
  subText,
  icon,
}: ChatListBoxProps) {
  return (
    <BoxWrapper>
      <Profile img={img} size="5.6rem" />
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
`;

const TextBox = styled.div`
  margin-left: 0.8rem;
`;

const MainText = styled.div`
  span {
    ${(props) => props.theme.fontStyles.headLine2};
    margin-right: 0.4rem;
  }
  display: flex;
  align-items: center;
`;

const SubText = styled.div`
  span {
    ${(props) => props.theme.fontStyles.body2};
    color: ${(props) => props.theme.colors.gray1};
  }
`;
