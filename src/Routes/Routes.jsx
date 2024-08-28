import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import BillingPage from "../Pages/BillingPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/billing-list",
        element: <BillingPage />,
      },
    ],
  },
]);
