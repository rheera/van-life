import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import {
  redirect,
  useLoaderData,
  Form as RouterForm,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { loginUser } from "../utils/functions";
import "../scss/login.scss";

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
  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";
  // try {
  //   await loginUser({ email, password });
  //   localStorage.setItem("isLoggedIn", "true");
  //   return redirect("/host");
  // } catch (e) {
  //   return e.message;
  // }

  // both of these ways work ^
  const login = await loginUser({ email, password })
    .then((data) => {
      data;
      localStorage.setItem("isLoggedIn", "true");
      return redirect(pathname);
    })
    .catch((e) => {
      return e.message;
    });
  return login;

  // a way to make all the entries from the form data become one object
  /*
  const userData = Object.fromEntries(
    formData.entries()
  ) as unknown as UserCredential;
  */
};

const Login = () => {
  const errorMessage = useActionData() as string;
  const message = useLoaderData() as string | null;
  const navigation = useNavigation();
  const isLoggingIn = navigation.state;

  return (
    <section className="login main-content">
      <Container className="site-page">
        {message && <h4 className="text-danger text-center">{message}</h4>}
        <h3>Sign in to your account</h3>
        {errorMessage && (
          <h4 className="text-danger text-center">{errorMessage}</h4>
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
            disabled={isLoggingIn === "submitting"}
          >
            {isLoggingIn === "submitting" ? "Logging In..." : "Log In"}
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
