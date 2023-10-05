import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const SiteNav = () => {
  return (
    <Navbar expand="sm" className="nav">
      <Container>
        <Navbar.Brand className="nav__brand" to="/" as={Link}>
          #VANLIFE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link className="nav__link " to="/about" as={Link}>
              About
            </Nav.Link>
            <Nav.Link className="nav__link" to="/vans" as={Link}>
              Vans
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNav;
