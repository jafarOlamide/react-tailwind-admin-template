import { createBrowserRouter } from "react-router-dom";
import Login from "./views/auth/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ErrorPage from "./views/ErrorPage";
import Layout from "./components/Layout";
import Home from "./views/Home";
import ResetPassword from "./views/auth/ResetPassword";
import Settings from "./views/Settings";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/reset-password", element: <ResetPassword /> },
  {
    element: <ProtectedRoutes />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          { path: "settings", element: <Settings /> },
        ],
      },
    ],
  },
]);

export default router;
