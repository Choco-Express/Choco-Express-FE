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
import { MyPage } from "./pages/MyPage/MyPage";
import { SharePage } from "./pages/Share/Share";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/box/:boxId",
        element: <OtherboxPage />,
      },
      {
        path: "/box/:boxId/complete",
        element: <CompletePage />,
      },
      {
        path: "/box/:boxId/choco",
        element: <LetterPostPage />,
      },
      {
        path: "/share",
        element: <SharePage />,
      },
      //API연결 시 수정

      {
        path: "/error",
        element: <NotFound />,
      },
      {
        path: "",
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
      { path: "/detailletter/:id", element: <DetailLetter /> },
      { path: "/chocolist/:boxId", element: <ChocoList /> },
      { path: "/mypage", element: <MyPage /> },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
