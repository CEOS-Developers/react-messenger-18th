import React from "react";
import styled from "styled-components";
import ChipButton from "@features/friend/components/ChipButton/ChipButton";
import { ReactComponent as TopArrow } from "@common/icons/arrows/toparrow.svg";

interface MajorHeaderProps {
  people: number;
  majorIn: string;
}

export default function MajorHeader({ people, majorIn }: MajorHeaderProps) {
  return (
    <MajorHeaderWrapper>
      <MajorInfo>
        <ChipButton text={majorIn} />
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
