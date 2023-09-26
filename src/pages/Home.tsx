import React from "react";
import styled from "styled-components";

export default function Home() {
  return <HomeWrapper>Home</HomeWrapper>;
}

const HomeWrapper = styled.div`
  ${(props) => props.theme.fontStyles.headLine1};
  height: 73.7rem;
`;
