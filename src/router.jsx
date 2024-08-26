import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { OtherboxPage } from "./pages/otherboxPage/otherboxPage";
import { CompletePage } from "./pages/CompletePage/CompletePage";
import { NotFound } from "./pages/NotFound/NotFound";
import { LetterOptionPage } from "./pages/LetterPage/LetterOptionPage";
import { LetterPostPage } from "./pages/LetterPage/LetterPostPage";

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
        element: <LetterOptionPage />,
      },
      {
        path: "/box/letter/Post",
        element: <LetterPostPage />,
      },
      //API연결 시 수정
      {
        path: "/error",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
