import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Work from "./Routes/Work";
import Project from "./Routes/ProjectRoute";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route element={<Home />} index />
      <Route element={<About />} path="about" />
      <Route element={<Work />} path="work" />
      <Route path="work/:project" element={<Project />} />
      <Route element={<Contact />} path="contact" />
    </Route>
  )
);
root.render(<RouterProvider router={router} />);
