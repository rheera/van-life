import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import "./scss/app.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
