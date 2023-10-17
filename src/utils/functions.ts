import { redirect } from "react-router-dom";
import { VanTypes } from "../types/enums";

export const vanTypeButtonColor = (type: VanTypes) => {
  return type === VanTypes.simple
    ? "warning"
    : type === VanTypes.luxury
    ? "dark"
    : "success";
};

export const requireAuth = async () => {
  const isAuthenticated = localStorage.getItem("isLoggedIn") || false;

  if (!isAuthenticated) {
    throw redirect("/login");
  }
};
