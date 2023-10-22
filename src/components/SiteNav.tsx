import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../assets/images/van-logo.png";
import { useState } from "react";

const SiteNav = () => {
  const activeClass = ({ isActive }: { isActive: boolean }) => {
    return isActive ? "nav-link nav__link active-link" : "nav-link nav__link";
  };
  // need to add this expanded code since collapseOnSelect doesn't work with NavLinks
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="sm" className="nav" expanded={expanded}>
      <Container>
        <Navbar.Brand className="nav__brand" to="." as={Link}>
          <img src={logo} alt="Van Life Logo" />
          <h1>#VANLIFE</h1>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="site-navbar"
          onClick={() => setExpanded((prevState) => !prevState)}
        />
        <Navbar.Collapse id="site-navbar" className="justify-content-end">
          <Nav>
            <NavLink
              to="host"
              onClick={() => setExpanded(false)}
              className={activeClass}
              role="button"
            >
              Host
            </NavLink>
            <NavLink
              onClick={() => setExpanded(false)}
              className={activeClass}
              to="vans"
              role="button"
            >
              Vans
            </NavLink>
            <NavLink
              onClick={() => setExpanded(false)}
              className={activeClass}
              to="about"
              role="button"
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setExpanded(false)}
              className={activeClass}
              to="login"
              role="button"
            >
              <FaRegUserCircle />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNav;
