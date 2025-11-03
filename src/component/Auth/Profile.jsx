import React from "react";
import { useAuth } from "../../context/AuthContext";
import "../../styles/AuthPages.css";

const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <div className="auth-container">
      <div className="auth-card profile-info">
        {user ? (
          <>
            <h2>Welcome, {user.name}</h2>
            <p>Email: {user.email}</p>
            <button className="btn btn-danger mt-3" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <h3>Please login to view your profile.</h3>
        )}
      </div>
    </div>
  );
};

export default Profile;
