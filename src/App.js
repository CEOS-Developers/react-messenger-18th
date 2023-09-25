import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { GlobalStyles } from "./style/GloblalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import StatusBar from "./components/moleclues/StatusBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <StatusBar />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
