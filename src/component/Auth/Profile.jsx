import React from "react";
import { useAuth } from "../../context/AuthContext";
import "../../styles/auth.css";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <h2>User not logged in ❌</h2>
          <Link to="/login" className="btn-link">Go to Login</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-card profile-card">
        <h2>👋 Welcome, {user.name}</h2>
        <div className="profile-info">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Mobile:</strong> {user.mobile}</p>
          <p><strong>Address:</strong> {user.address}</p>
        </div>

        <button onClick={logout}>Logout</button>
        <Link to="/myorders" className="btn-link">View My Orders</Link>
      </div>
    </div>
  );
};

export default Profile;
