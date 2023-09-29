import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import StatusBar from "./StatusBar";
import HomeIndicator from "./HomeIndicator";
import theme from "../../styles/theme";

export default function PhoneLayout() {
  const location = useLocation();

  const isChatRoom = location.pathname.startsWith("/chatroom");
  return (
    <Container>
      <StatusBar />
      <PageWrapper>
        <Outlet />
      </PageWrapper>
      <HomeIndicator $bgColor={isChatRoom ? theme.colors.gray6 : null} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 37.5rem;
  height: 81.4rem;
  border: 1px solid black;
`;

const PageWrapper = styled.div`
  ${(props) => props.theme.fontStyles.headLine1};
  height: 73.7rem;
`;
