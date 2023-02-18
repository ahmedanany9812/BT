import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./Views/Home";
import About from "./Views/About";
import Store from "./Store";
import Project from "./Views/ProjectRoute";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "about", element: <About /> },

      {
        path: "work/:project",
        element: <Project />,
      },
    ],
  },
]);
root.render(
  <Provider store={Store}>
    <RouterProvider router={router} />
  </Provider>
);
