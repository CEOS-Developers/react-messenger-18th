import React from "react";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import StatusBar from "./StatusBar";
import HomeIndicator from "./HomeIndicator";

export default function PhoneLayout() {
  return (
    <Container>
      <StatusBar />
      <PageWrapper>
        <Outlet />
      </PageWrapper>
      <HomeIndicator />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 37.5rem;
  height: 81.2rem;
  border: 1px solid black;
`;

const PageWrapper = styled.div`
  ${(props) => props.theme.fontStyles.headLine1};
  height: 73.7rem;
`;
