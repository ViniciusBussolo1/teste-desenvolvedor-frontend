import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Bulario } from "./modules/home";
import "./styles/reset.css";

const router = createBrowserRouter([
  {
    path: "/bulario",
    element: <Bulario />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
