import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Layout from "./Layout";
import React from "react";
import VideoCall from "./pages/VideoCall";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/meet/:id",
        element: <VideoCall />,
      },
    ],
  },
]);
