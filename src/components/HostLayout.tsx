import { NavLink, Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "../scss/host.scss";

const HostLayout = () => {
  const activeClass = ({ isActive }: { isActive: boolean }) => {
    return isActive ? "nav-link nav__link active-link" : "nav-link nav__link";
  };
  return (
    <section className="host site-page main-content">
      <Navbar expand className="dashboard-nav">
        <Navbar.Collapse
          id="dashboard-navbar"
          className="justify-content-between"
        >
          <Nav>
            <NavLink to="/host" end className={activeClass}>
              Dashboard
            </NavLink>
            <NavLink to="/host/reviews" className={activeClass}>
              Reviews
            </NavLink>
            <NavLink to="/host/vans" className={activeClass}>
              Vans
            </NavLink>
            <NavLink to="/host/income" className={activeClass}>
              Income
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Outlet />
    </section>
  );
};

export default HostLayout;
