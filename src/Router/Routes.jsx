import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import NotFound from "../pages/eror404/NotFound";

import Home from "../pages/Home";
import About from "../pages/about/About";
import Books from "../pages/book/Books";
import Login from "../pages/auth/login";
import RegisterPage from "../pages/auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true, // 👈 أفضل من path: "/"
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
