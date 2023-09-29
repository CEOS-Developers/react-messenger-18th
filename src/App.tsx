import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { GlobalStyles } from "./style/GloblalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import { styled } from "styled-components";
import { RecoilRoot } from "recoil";
import React from "react";

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <GlobalStyles />
          <ThemeProvider theme={theme}>
            <AppContainer>
              <Router />
            </AppContainer>
          </ThemeProvider>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}
// 고정형
const AppContainer = styled.div`
  width: 375px;
  height: 812px;
  border-radius: 24px;
  margin: 0 auto;
  border-radius: 24px;
  background-color: ${theme.colors.white};
`;

export default App;
