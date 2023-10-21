import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import {
  redirect,
  useLoaderData,
  useLocation,
  useNavigate,
  Form as RouterForm,
} from "react-router-dom";
import { loginUser } from "../utils/functions";
import "../scss/login.scss";
import { UserCredential } from "../types/interfaces";

export const loader = ({
  request,
}: {
  request: Request;
}): string | null | Response => {
  if (localStorage.getItem("isLoggedIn")) {
    return redirect("/host");
  }

  return new URL(request.url).searchParams.get("message");
};

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const data = await loginUser({ email, password });
  console.log(data);

  localStorage.setItem("isLoggedIn", "true");
  return redirect("/host");
  // a way to make all the entries from the form data become one object
  /*
  const userData = Object.fromEntries(
    formData.entries()
  ) as unknown as UserCredential;
  */
};

const Login = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState<null | Error | unknown>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const message = useLoaderData() as string | null;

  const redirectPath = location.state?.originalPath || "/host";

  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setError(null);

    loginUser(formData)
      .then((data) => {
        // don't have a method to check user tokens etc. so for now do nothing with the data
        data;
        setError(null);
        localStorage.setItem("isLoggedIn", "true");
        navigate(redirectPath, { replace: true });
      })
      .catch((e) => setError(e))
      .finally(() => setIsLoggingIn(false));
  };

  return (
    <section className="login main-content">
      <Container className="site-page">
        {message && <h4 className="text-danger text-center">{message}</h4>}
        <h3>Sign in to your account</h3>
        {(error as Error)?.message && (
          <h4 className="text-danger text-center">
            {(error as Error).message}
          </h4>
        )}
        <RouterForm replace method="post">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type="password"
                placeholder="Password"
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
        </RouterForm>
        <p>
          Don’t have an account? <a href="#">Create one now</a>
        </p>
      </Container>
    </section>
  );
};

export default Login;
