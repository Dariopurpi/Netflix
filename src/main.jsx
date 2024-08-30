import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./routes/HomePage.jsx";
import DetailsMovie from "./routes/DetailsMovie.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/:ID",
    element: <DetailsMovie />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
