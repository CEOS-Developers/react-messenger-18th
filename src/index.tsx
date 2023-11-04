import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import GlobalStyles from "@styles/GlobalStyles";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
