import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Camera from "./static/images/Camera.svg"
function App() {  const navigate = useNavigate();
  return (
<div>
<div className="App">

      <BrowserRouter>
      <Routes></Routes>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;
