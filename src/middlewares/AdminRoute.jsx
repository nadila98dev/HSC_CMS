import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminRoute({ children }) {
  let token = localStorage.getItem("token");

  if (token) return <Navigate to="/" replace={true} />;

  return children || <Outlet />;
}
