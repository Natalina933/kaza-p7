import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from ".pages/Home/Home"
import { getAllLodgings } from "./pages/Home/Home";

const router = createBrowserRouter([{ 
  path: "/", 
  element: <App />, 
  children:[
    {path: "/",
  element : <Home/>,loader:getAllLodgings},
  ]
 }]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render;
{
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>;
}


