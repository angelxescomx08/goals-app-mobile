import { Outlet } from "react-router";
import { LoginPage } from "@/modules/auth/pages/LoginPage";
import { RouteObject } from "react-router";
import { RegisterPage } from "@/modules/auth/pages/RegisterPage";

export const AuthRouter: RouteObject = {
  path: "/auth",
  element: <Outlet />,
  children: [
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "register",
      element: <RegisterPage />,
    }
  ],
};
