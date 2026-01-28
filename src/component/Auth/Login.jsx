import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post( 
        "https://sipncrunch-backend-buop.onrender.com/api/auth/login",//replace your node server host
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      const { user, token } = res.data;
      console.log(`user login data `,res.data)
      if (!token) {
        toast.error("Invalid response from server");
        return;
      }

      login(user, token); // ✅ update AuthContext & localStorage

      toast.success(`Welcome back, ${user.name.split(" ")[0]}!`);
      navigate("/");
    } catch (err) {
      const msg = err.response?.data?.message || "Login failed";
      toast.error(msg);
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
              required
              placeholder="Enter your email"
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
              required
              placeholder="Enter your password"
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




// ----------------admin add kiya -----------
// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// const Login = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     loginAs: "customer", // 👈 NEW
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "https://sipncrunch-backend-buop.onrender.com/api/auth/login",
//         {
//           email: formData.email,
//           password: formData.password,
//         },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       const { user, token } = res.data;

//       if (!token || !user) {
//         toast.error("Invalid response from server");
//         return;
//       }

//       // 🔐 ADMIN CHECK
//       if (formData.loginAs === "admin" && user.role !== "admin") {
//         toast.error("You are not authorized as admin");
//         return;
//       }

//       login(user, token); // save to context + localStorage

//       toast.success(`Welcome back, ${user.name.split(" ")[0]}!`);

//       // 🔁 Redirect based on role
//       if (user.role === "admin") {
//         navigate("/admin/dashboard");
//       } else {
//         navigate("/");
//       }

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

//           {/* 🔘 LOGIN TYPE */}
//           <div className="mb-3">
//             <label>Login As</label>
//             <select
//               name="loginAs"
//               className="form-control"
//               value={formData.loginAs}
//               onChange={handleChange}
//             >
//               <option value="customer">Customer</option>
//               <option value="admin">Admin</option>
//             </select>
//           </div>

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
