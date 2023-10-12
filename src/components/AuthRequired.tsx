import { Outlet, Navigate, useLocation } from "react-router-dom";

const AuthRequired = () => {
  const authenticated = localStorage.getItem("isLoggedIn") || false;
  const location = useLocation();

  if (!authenticated) {
    return (
      <Navigate
        to="/login"
        state={{
          message: "You must log in to do that",
          originalPath: location.pathname,
        }}
        replace
      />
    );
  }

  return <Outlet />;
};

export default AuthRequired;
