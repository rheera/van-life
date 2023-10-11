import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "../scss/not-found.scss";

const NotFound = () => {
  return (
    <section className="not-found main-content">
      <Container className="site-page">
        <h2>Sorry, the page you were looking for was not found.</h2>
        <Link to="/">
          <Button className="big-button" variant="dark">
            Return to home
          </Button>
        </Link>
      </Container>
    </section>
  );
};

export default NotFound;
