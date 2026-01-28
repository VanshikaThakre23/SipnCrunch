import React, { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        "https://sipncrunch-backend-buop.onrender.com/api/admin/users"
      );
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <AdminLayout>
      <h2>Registered Users</h2>
      <ul>
        {users.map((u) => (
          <li key={u._id}>
            <p>
              <strong>Name:</strong> {u.name} | <strong>Email:</strong>{" "}
              {u.email}
            </p>
            <p>
              <strong>Orders:</strong>{" "}
              {u.orders && u.orders.length > 0
                ? u.orders.map((o) => `${o.itemName} (₹${o.price})`).join(", ")
                : "No orders yet"}
            </p>
          </li>
        ))}
      </ul>
    </AdminLayout>
  );
};

export default Users;
