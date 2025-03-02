// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     role: "",
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/auth/login",
//         formData
//       );
//       localStorage.setItem("token", response.data.token);
//       navigate("/data"); // Redirect on successful login
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     }
//   };

//   const handleForgotPassword = () => {
//     navigate("/ForgotPassword");
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md border border-gray-300 w-full max-w-md">
//         <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Email:
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Password:
//             </label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Role:
//             </label>
//             <select
//               name="role"
//               value={formData.role}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             >
//               <option value="">Select a role</option>
//               <option value="admin">Admin</option>
//               <option value="farmer">Farmer</option>
//               <option value="user">User</option>
//             </select>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none"
//           >
//             Login
//           </button>
//         </form>
//         {error && <p className="text-red-600 text-center mt-4">{error}</p>}
//         <button
//           onClick={handleForgotPassword}
//           className="mt-4 w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 focus:outline-none"
//         >
//           Forgot Password?
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;






/*import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        formData
      );
      localStorage.setItem("token", response.data.token);

      // Fetch the user ID from the response
      const userId = response.data.userId; // Make sure this is part of your response
            localStorage.setItem("user", JSON.stringify(response.data.userId));

      // Navigate to the appropriate dashboard based on role
      switch (formData.role) {
        case "admin":
          navigate(`/admin/dashboard/${userId}`); // Update the path as needed
          break;
        case "farmer":
          navigate(`/farmer/dashboard/${userId}`); // Update the path as needed
          break;
        case "user":
          navigate(`/user/dashboard/${userId}`); // Update the path as needed
          break;
        default:
          setError("Invalid role selected.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  const handleForgotPassword = () => {
    navigate("/ForgotPassword");
  };

  return (
    <div className="login-container">
  <div className="login-box">
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Role:
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select a role</option>
              <option value="admin">Admin</option>
              <option value="farmer">Farmer</option>
              <option value="user">User</option>
            </select>
          </div>
          <button type="submit" className="login-button">
  Login
</button>

        </form>
        {error && <p className="error-message">{error}</p>}

        <button
          onClick={handleForgotPassword}
          className="mt-4 w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 focus:outline-none"
        >
          Forgot Password?
        </button>
      </div>
    </div>
  );
};

export default Login;*/

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://krishi-backend-s9wi.onrender.com/auth/login",
        formData
      );
      localStorage.setItem("token", response.data.token);

      // Fetch the user ID from the response
      const userId = response.data.userId; // Make sure this is part of your response
            localStorage.setItem("user", JSON.stringify(response.data.userId));

      // Navigate to the appropriate dashboard based on role
      switch (formData.role) {
        case "admin":
          navigate(`/admin/dashboard/${userId}`);
 // Update the path as needed
          break;
        case "farmer":
          navigate(`/farmer/dashboard/${userId}`) // Update the path as needed
          break;
        case "user":
          navigate(`/user/dashboard/${userId}`); // Update the path as needed
          break;
        default:
          setError("Invalid role selected.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  const handleForgotPassword = () => {
    navigate("/ForgotPassword");
  };

  return (
    <div className="login-container">
  <div className="login-box">
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Role:
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">SELECT A ROLE</option>
              <option value="admin">Admin</option>
              <option value="farmer">Farmer</option>
              <option value="user">User</option>
            </select>
          </div>
          <button type="submit" className="login-button">
  Login
</button>

        </form>
        {error && <p style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>{error}</p>}


        <button
          onClick={handleForgotPassword}
          className="mt-4 w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 focus:outline-none"
        >
          Forgot Password?
        </button>
      </div>
    </div>
  );
};

export default Login;