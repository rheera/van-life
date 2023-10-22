import { NavLink, Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "../scss/host.scss";

const HostLayout = () => {
  const activeClass = ({ isActive }: { isActive: boolean }) => {
    return isActive ? "nav-link nav__link active-link" : "nav-link nav__link";
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
  };
  return (
    <Container className="host site-page main-content">
      <Navbar expand className="dashboard-nav">
        <Navbar.Collapse
          id="dashboard-navbar"
          className="justify-content-between"
        >
          <Nav>
            <NavLink to="." end className={activeClass}>
              Dashboard
            </NavLink>
            <NavLink to="reviews" className={activeClass}>
              Reviews
            </NavLink>
            <NavLink to="vans" className={activeClass}>
              Vans
            </NavLink>
            <NavLink to="income" className={activeClass}>
              Income
            </NavLink>
          </Nav>
          <Nav>
            <NavLink to="/login" onClick={logout} className={activeClass}>
              Logout
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Outlet />
    </Container>
  );
};

export default HostLayout;
