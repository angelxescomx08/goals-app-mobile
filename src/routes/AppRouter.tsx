import { createBrowserRouter, Navigate } from "react-router";
import { AuthRouter } from "./auth/AuthRouter";

export const router = createBrowserRouter([
  AuthRouter,
  {
    path: "/",
    element: <Navigate to="/auth/login" />,
  },
]);
