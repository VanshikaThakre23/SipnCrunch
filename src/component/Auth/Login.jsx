// import React, { useState } from "react";
// import axios from "axios";
// // import API from "../../api/axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// const Login = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const [formData, setFormData] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//      console.log("Sending form data:", formData);

//     try {

//       const res = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         formData,
//         { headers: { "Content-Type": "application/json" } }
//       );


//       const { user, token } = res.data;
//       console.log(`user login data `, res.data)
//       if (!token) {
//         toast.error("Invalid response from server");
//         return;
//       }

//       login(user, token); // ✅ update AuthContext & localStorage

//       toast.success(`Welcome back, ${user.name.split(" ")[0]}!`);
//       navigate("/");
//     } catch (err) {
//       const msg = err.response?.data?.message || "Login failed";
//       toast.error(msg);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               className="form-control"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="mb-3">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               className="form-control"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               placeholder="Enter your password"
//             />
//           </div>
//           <button type="submit" className="btn btn-success w-100">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending form data:", formData);

    try {
      const res = await axios.post(
       `${BASE_URL}/api/auth/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Login response:", res.data);

      const { user, token } = res.data;

      if (!user || !token) {
        toast.error("Invalid response from server");
        return;
      }

      // save user + token
      login(user, token);

      toast.success(`Welcome back, ${user.name}`);
      navigate("/");
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
