import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import "../scss/login.scss";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
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
        <h3>Sign in to your account</h3>
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

          <Button className="big-button" variant="warning" type="submit">
            Sign in
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
