import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        // path: "/error",
        // element: <NotFound />,
      },
    ],
  },
]);

export default router;
