import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteNav from "./components/SiteNav";
import Home from "./views/Home";
import About from "./views/About";
import Footer from "./components/SiteFooter";
import "./scss/app.scss";

function App() {
  return (
    <BrowserRouter>
      <SiteNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
