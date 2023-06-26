import * as React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./Pages/Home/HomeContainer";
import Community from "./Pages/Community/Community";
import { TechLiftTraining, TechLiftEvent, Training, Event } from "./Pages/GrowthProgram";

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
        {
            path: "/growthprogram",
            children: [
              {
                index: true,
                element: <Training />,
              },
              {
                path: "event",
                element:<Event />,
              },
            ],
          },
      ],
    },
  ]);
  return element;
}
