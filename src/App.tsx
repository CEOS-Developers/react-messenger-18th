import { BrowserRouter, Routes, Route } from "react-router-dom";

import Mainpage from "./pages/Mainpage";
import BottomBar from "./components/Bottombar";
import Topbar from "./components/Topbar";
import TBA from "./pages/TBA";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route
            path="/"
            element={<TBA />}
          />
          <Route
            path="/chat/:chatId"
            element={<Mainpage />}
          />
          <Route
            path="chatlist"
            element={<TBA />}
          />
        </Routes>
        <BottomBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
