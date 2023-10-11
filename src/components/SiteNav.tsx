import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaRegUserCircle } from "react-icons/fa";

const SiteNav = () => {
  const activeClass = ({ isActive }: { isActive: boolean }) => {
    return isActive ? "nav-link nav__link active-link" : "nav-link nav__link";
  };
  return (
    <Navbar expand="sm" className="nav">
      <Container>
        <Navbar.Brand className="nav__brand" to="." as={Link}>
          #VANLIFE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="site-navbar" />
        <Navbar.Collapse id="site-navbar" className="justify-content-end">
          <Nav>
            <NavLink to="host" className={activeClass} role="button">
              Host
            </NavLink>
            <NavLink className={activeClass} to="vans" role="button">
              Vans
            </NavLink>
            <NavLink className={activeClass} to="about" role="button">
              About
            </NavLink>
            <NavLink className={activeClass} to="login" role="button">
              <FaRegUserCircle />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNav;
