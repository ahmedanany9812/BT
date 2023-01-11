import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Work from "./Routes/Work";
import Project from "./Routes/ProjectRoute";
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
