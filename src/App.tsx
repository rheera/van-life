import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import About from "./views/About";
import NotFound from "./views/NotFound";
import Vans, { loader as vansLoader } from "./views/Vans/Vans";
import VanDetail, { loader as vanDetailLoader } from "./views/Vans/VanDetail";
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
import AuthRequired from "./components/AuthRequired";
import Error from "./components/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        loader={vansLoader}
        element={<Vans />}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        element={<VanDetail />}
        loader={vanDetailLoader}
        errorElement={<Error />}
      />

      {/* Host Routes */}
      <Route element={<AuthRequired />}>
        <Route path="host" element={<HostLayout />} errorElement={<Error />}>
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
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
