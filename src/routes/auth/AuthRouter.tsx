import { Outlet } from "react-router";
import { LoginPage } from "@/modules/auth/pages/Login";
import { RouteObject } from "react-router";

export const AuthRouter: RouteObject = {
  path: "/auth",
  element: <Outlet />,
  children: [
    {
      path: "login",
      element: <LoginPage />,
    },
  ],
};
