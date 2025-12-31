import { RouteObject } from "react-router";
import { PrivateRoute } from "../PrivateRoute";

export const PanelRouter: RouteObject = {
  path: "/panel",
  element: <PrivateRoute />,
  children: [
    {
      path: "/panel",
      element: <div>Panel</div>,
    },
  ],
};
