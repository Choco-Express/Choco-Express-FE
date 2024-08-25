import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { OtherboxPage } from "./pages/otherboxPage/otherboxPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/box",
        element: <OtherboxPage />,
        // path: "/error",
        // element: <NotFound />,
      },
    ],
  },
]);

export default router;
