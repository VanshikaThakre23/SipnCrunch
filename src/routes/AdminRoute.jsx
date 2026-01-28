import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminRoute = ({ children }) => {
  const { user } = useAuth(); // get logged-in user from context

  // Not logged in → redirect to login
  if (!user) return <Navigate to="/login" />;

  // Logged in but not admin → redirect to home
  if (user.role !== "admin") return <Navigate to="/" />;

  // Admin → show page
  return children;
};

export default AdminRoute;
