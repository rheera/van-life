import { Outlet, Navigate } from "react-router";

const AuthRequired = () => {
  const authenticated = false;

  if (!authenticated) {
    return (
      <Navigate to="/login" state={{ message: "You must log in to do that" }} />
    );
  }

  return <Outlet />;
};

export default AuthRequired;
