import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { OtherboxPage } from "./pages/otherboxPage/otherboxPage";
import { CompletePage } from "./pages/CompletePage/CompletePage";
import { NotFound } from "./pages/NotFound/NotFound";
import { LetterPage } from "./pages/LetterPage/LetterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MyboxPage from "./pages/MyboxPage/MyboxPage";
import MyboxSelectPage from "./pages/MyboxSelectPage/MyboxSelectPage";
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
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/mybox",
        element: <MyboxPage />,
      },
      {
        path: "/mybox/select",
        element: <MyboxSelectPage />,
      },
    ],
  },
]);

export default router;
