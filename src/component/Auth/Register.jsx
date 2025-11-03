import React, { useState } from "react";
import axios from "axios";
import { showToast } from "../../utils/toast";
import { useNavigate } from "react-router-dom";
import "../../styles/AuthPages.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 const API_URL = import.meta.env.VITE_API_URL;


  const handleRegister = async (e) => {
    e.preventDefault();
    try {
    await axios.post(`${API_URL}/auth/register`, {
        name,
        email,
        password,
      });
      showToast("Registration successful! Please login.", "success");
      navigate("/login");
    } catch (err) {
      console.error(err);
      showToast("Registration failed ❌", "error");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-success">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
