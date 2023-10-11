import { Outlet, Navigate } from "react-router";

const AuthRequired = () => {
  const authenticated = false;

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default AuthRequired;
