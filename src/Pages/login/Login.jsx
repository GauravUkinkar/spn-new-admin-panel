import React, { useState } from "react";
import "./Login.scss";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [data, setData] = useState({
    username: "admin@spn",
    password: "spn@admin",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}api/auth/login`,
        data
      );

      console.log(response.data.data,"response");
      
      if (response?.status === 200) {
        localStorage.setItem("role", response?.data?.data?.role);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", response?.data?.data?.username)

        toast.success("Login successful!");
        navigate("/dashboard");
      } else {
        toast.error("Invalid credentials!");
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Invalid username or password!"
      );
    }
  };

  return (
    <>
      <div className="login-parent parent">
        <div className="login-container container">
          <form className="login-form">
            <h2>LOGIN</h2>
            <input
              type="text"
              placeholder="Username"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <button className="btn" onClick={handleSubmit} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
