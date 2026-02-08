import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://sipncrunch-backend-buop.onrender.com/api/auth/register", //replace your node host
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      toast.success(res.data.message || "Registered successfully");
      navigate("/login");
    } catch (err) {
  console.error("Full error:", err.response); // logs all backend details
  const msg = err.response?.data?.message || "Registration failed";
  toast.error(msg);
}

  };

  return (
    <div className="container m-auto py-5 " style={{ maxWidth: "500px" }}>
  
        <h2 className="text-center mb-4 mt-5" >Create an Account</h2>
        <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="btn btn-danger w-100">
            Register
          </button>
        </form>
      
      </div>
      );
};

      export default Register;
