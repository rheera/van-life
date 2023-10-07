import { Outlet } from "react-router";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";

const Layout = () => (
  <>
    <SiteNav />
    <Outlet />
    <SiteFooter />
  </>
);

export default Layout;
