import React from "react";
import AdminLayout from "./AdminLayout";

const Dashboard = () => {
  return (
    <AdminLayout>
      <h2>Admin Dashboard</h2>
      <p>Welcome, Admin!</p>

      <div style={{ marginTop: "20px" }}>
        <div>Total Users: 0</div>
        <div>Total Products: 0</div>
        <div>Total Orders: 0</div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
