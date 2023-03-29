import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { getAllLodgings } from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import Lodging, { getLodgingById } from "./pages/Lodging/Lodging";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home />, loader: getAllLodgings },
      { path: "/about", element: <About /> },
      {
        path: "/lodging/:lodgingId",
        element: <Lodging />,
        loader: getLodgingById,
        errorElement: <NotFound />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
