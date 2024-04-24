import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DrugLabels } from "./modules/home";
import "./styles/reset.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DrugLeafletProvider } from "./providers/DrugLeafletProvider";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "*",
    element: <DrugLabels />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DrugLeafletProvider>
        <RouterProvider router={router} />
      </DrugLeafletProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
