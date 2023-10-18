import { redirect } from "react-router-dom";
import { VanTypes } from "../types/enums";
import { UserCredential } from "../types/interfaces";

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
    return redirect("/login?message=You must log in first");
  }
  return null;
};
const checkUser = (creds: UserCredential) => {
  if (creds.email === "b@b.com" && creds.password === "p123") {
    return true;
  } else {
    return false;
  }
};
export async function loginUser(creds: UserCredential) {
  const res = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (checkUser(creds)) {
        resolve({
          type: "Success ✅",
          data: {
            user: creds.email,
            token: "Enjoy your pizza, here's your tokens.",
          },
        });
      } else {
        reject({ message: "Invalid email or password" });
      }
    }, 300);
  });

  return await res;
}
