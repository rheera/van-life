import { useRouteError } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { CustomError } from "../types/interfaces";

const Error = () => {
  const error: null | unknown | CustomError = useRouteError();
  return (
    <section className="error main-content">
      <Container className="site-page">
        <h2>Sorry, there was an error</h2>
        <h3>{(error as CustomError).message}</h3>
        <pre>
          Error {(error as CustomError).status}:{" "}
          {(error as CustomError).statusText}
        </pre>
      </Container>
    </section>
  );
};

export default Error;
