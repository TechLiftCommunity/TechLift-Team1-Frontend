import * as React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./Pages/Home/HomeContainer";
import {
  TechLiftTraining,
  TechLiftEvent,
  Training,
  Event,
} from "./Pages/GrowthProgram";
import CommunityApp from "./Pages/Community/CommunityApp";

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
          element: <CommunityApp />,
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
              element: <Event />,
            },
          ],
        },
      ],
    },
  ]);
  return element;
}
