import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { OtherboxPage } from "./pages/otherboxPage/otherboxPage";
import { CompletePage } from "./pages/CompletePage/CompletePage";
import { NotFound } from "./pages/NotFound/NotFound";
import { LetterPostPage } from "./pages/LetterPage/LetterPostPage";

import LoginPage from "./pages/LoginPage/LoginPage";
import MyboxPage from "./pages/MyboxPage/MyboxPage";
import MyboxSelectPage from "./pages/MyboxSelectPage/MyboxSelectPage";
import DetailLetter from "./pages/DetailLetter/DetailLetter";
import ChocoList from "./pages/ChocoList/ChocoList";

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
        element: <LetterPostPage />,
      },

      //API연결 시 수정

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
      { path: "/detailletter", element: <DetailLetter /> },
      { path: "/chocolist", element: <ChocoList /> },
    ],
  },
]);

export default router;
