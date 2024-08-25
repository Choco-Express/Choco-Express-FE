import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { OtherboxPage } from "./pages/otherboxPage/otherboxPage";
import { CompletePage } from "./pages/CompletePage/CompletePage";
import { NotFound } from "./pages/NotFound/NotFound";
import { LetterPage } from "./pages/LetterPage/LetterPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/box",
        element: <OtherboxPage />,
      },
      {
        path: "/box/complete",
        element: <CompletePage />,
      },
      {
        path: "/box/letter",
        element: <LetterPage />,
      },
      {
        path: "/error",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
