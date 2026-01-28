import React from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div
      style={{
        width: "220px",
        backgroundColor: "#1e293b",
        color: "#fff",
        padding: "20px",
      }}
    >
      <h3 style={{ marginBottom: "30px" }}>Admin Panel</h3>
      <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <NavLink
          to="/admin/dashboard"
          style={({ isActive }) => ({
            color: isActive ? "#38bdf8" : "#fff",
            textDecoration: "none",
          })}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/users"
          style={({ isActive }) => ({
            color: isActive ? "#38bdf8" : "#fff",
            textDecoration: "none",
          })}
        >
          Users
        </NavLink>

        <NavLink
          to="/admin/products"
          style={({ isActive }) => ({
            color: isActive ? "#38bdf8" : "#fff",
            textDecoration: "none",
          })}
        >
          Products
        </NavLink>

        <NavLink
          to="/admin/orders"
          style={({ isActive }) => ({
            color: isActive ? "#38bdf8" : "#fff",
            textDecoration: "none",
          })}
        >
          Orders
        </NavLink>
      </nav>
    </div>
  );
};

export default AdminSidebar;
