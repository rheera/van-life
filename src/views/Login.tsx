import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { loginUser } from "../api/api";
import "../scss/login.scss";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState<null | Error | unknown>(null);
  const location = useLocation();

  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);

    loginUser(formData)
      .then((data) => {
        console.log(data);
        setError(null);
      })
      .catch((e) => setError(e))
      .finally(() => setIsLoggingIn(false));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <section className="login main-content">
      <Container className="site-page">
        {location?.state.message && (
          <h4 className="text-danger text-center">{location.state.message}</h4>
        )}
        <h3>Sign in to your account</h3>
        {(error as Error)?.message && (
          <h4 className="text-danger text-center">
            {(error as Error).message}
          </h4>
        )}
        <Form onSubmit={handleSumbit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={handleChange}
                value={formData.email}
                name="email"
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handleChange}
                value={formData.password}
                name="password"
              />
            </FloatingLabel>
          </Form.Group>

          <Button
            className="big-button"
            variant="warning"
            type="submit"
            disabled={isLoggingIn}
          >
            {isLoggingIn ? "Logging In..." : "Log In"}
          </Button>
        </Form>
        <p>
          Don’t have an account? <a href="#">Create one now</a>
        </p>
      </Container>
    </section>
  );
};

export default Login;
