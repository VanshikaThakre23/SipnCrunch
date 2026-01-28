import React from "react";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = ({ children }) => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
