import React, { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  // Fetch orders (for now can be placeholder)
  const fetchOrders = async () => {
    try {
      // Replace this API when backend is ready
      const res = await axios.get(
        "https://sipncrunch-backend-buop.onrender.com/api/admin/orders"
      );
      setOrders(res.data);
    } catch (err) {
      console.log(err);
      // Placeholder data if API not ready
      setOrders([
        {
          _id: "1",
          user: "John Doe",
          items: [{ itemName: "Pizza", price: 200 }],
          total: 200,
          status: "Pending",
        },
        {
          _id: "2",
          user: "Jane Smith",
          items: [{ itemName: "Burger", price: 150 }],
          total: 150,
          status: "Completed",
        },
      ]);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <AdminLayout>
      <h2>All Orders</h2>
      <ul>
        {orders.map((o) => (
          <li key={o._id} style={{ marginBottom: "15px" }}>
            <p>
              <strong>User:</strong> {o.user} | <strong>Status:</strong>{" "}
              {o.status} | <strong>Total:</strong> ₹{o.total}
            </p>
            <p>
              <strong>Items:</strong>{" "}
              {o.items.map((i) => `${i.itemName} (₹${i.price})`).join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </AdminLayout>
  );
};

export default Orders;
