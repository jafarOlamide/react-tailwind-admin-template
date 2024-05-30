import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const authToken = localStorage.getItem("user");

  if (!authToken) return <Navigate to="/login" />;
  return <Outlet />;
};

export default ProtectedRoutes;
