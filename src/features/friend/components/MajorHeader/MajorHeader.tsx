import React from "react";
import styled from "styled-components";
import { ReactComponent as TopArrow } from "@common/icons/arrows/toparrow.svg";
import { ChipButton } from "@common/components";
import theme from "@styles/theme";

interface MajorHeaderProps {
  people: number;
  majorIn: string;
}

export function MajorHeader({ people, majorIn }: MajorHeaderProps) {
  return (
    <MajorHeaderWrapper>
      <MajorInfo>
        <ChipButton
          width="7.1rem"
          height="2.5rem"
          color={theme.colors.gray6}
          radius="0.2rem"
          addClass="padding:0.2rem 0.8rem;"
        >
          <BtnText>{majorIn}</BtnText>
        </ChipButton>
        <CountText>
          <span>{people}명</span>
        </CountText>
      </MajorInfo>
      <TopArrow />
    </MajorHeaderWrapper>
  );
}

const MajorHeaderWrapper = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  margin-bottom: 1.2rem;
  justify-content: space-between;
`;

const MajorInfo = styled.div`
  display: flex;
`;

const BtnText = styled.span`
  ${(props) => props.theme.fontStyles.body2};
  font-size: 1.4rem;
  font-weight: 500;
`;

const CountText = styled.div`
  margin-left: 0.8rem;
  display: flex;
  align-items: center;
  span {
    ${(props) => props.theme.fontStyles.body1}
    font-weight: 400;
    color: ${(props) => props.theme.colors.gray3};
  }
`;
