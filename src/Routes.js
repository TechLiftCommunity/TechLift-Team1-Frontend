import * as React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./Pages/Home/HomeContainer";
import Community from "./Pages/Community/Community";

export function Routes() {
  let element = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "community",
          element: <Community />,
        },
      ],
    },
  ]);
  return element;
}
