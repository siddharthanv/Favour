import React from "react";
import { useRoutes } from "react-router-dom";

// Main
import HomePage from "../Pages/HomePage/HomePage";

export default function Router() {
  return useRoutes[
    {
      path: "/",
      element: <HomePage />,
      //   children: [{ element: <HomePage />, index: true }],
    }
  ];
}
