import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import About from "./views/About";
import NotFound from "./views/NotFound";
import Vans from "./views/Vans/Vans";
import VanDetail from "./views/Vans/VanDetail";
import "./scss/app.scss";
import Dashboard from "./views/Host/Dashboard";
import Income from "./views/Host/Income";
import HostVans from "./views/Host/HostVans";
import HostVanDetail from "./views/Host/HostVanDetail";
import HostVanInfo from "./views/Host/HostVanInfo";
import HostVanPhotos from "./views/Host/HostVanPhotos";
import HostVanPrice from "./views/Host/HostVanPrice";
import Reviews from "./views/Host/Reviews";
import HostLayout from "./components/HostLayout";
import Login from "./views/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="price" element={<HostVanPrice />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
