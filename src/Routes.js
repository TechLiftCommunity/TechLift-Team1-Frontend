import * as React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./Pages/Home/Home";



export function  Routes() {
    let element = useRoutes ([
        {
            path: "/",
            children: [
                {
                    index: true,
                    element: <Home />
                }

            ]
        }
    ])
    return element
}