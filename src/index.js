import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./Views/Home";
import About from "./Views/About";
import Contact from "./Views/Contact";
import Work from "./Views/Work";
import Project from "./Views/ProjectRoute";
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
        path: "work",
        element: <Work />,
      },
      { path: "contact", element: <Contact /> },

      {
        path: "work/:project",
        element: <Project />,
      },
    ],
  },
]);
root.render(<RouterProvider router={router} />);
