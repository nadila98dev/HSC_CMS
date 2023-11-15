import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function Middleware({ children }) {
  let token = localStorage.getItem("token");

  if (!token) return <Navigate to="/login" replace={true} />;

  return children || <Outlet />;
}
