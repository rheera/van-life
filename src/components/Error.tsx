import { useRouteError, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { CustomError } from "../types/interfaces";

const Error = () => {
  const error: null | unknown | CustomError = useRouteError();

  return (
    <section className="error main-content">
      <Container className="site-page max-700-wide">
        <h2>Sorry, something went wrong</h2>
        <h3>{(error as CustomError)?.message}</h3>
        <pre>
          Error {(error as CustomError)?.status}:{" "}
          {(error as CustomError)?.statusText}
        </pre>
        <Link to="/">
          <Button className="big-button" variant="dark">
            Return home
          </Button>
        </Link>
      </Container>
    </section>
  );
};

export default Error;
