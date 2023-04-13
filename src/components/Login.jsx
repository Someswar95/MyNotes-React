import React, { useState } from "react";
import { loginUser } from "../services/UserService";
import { doLogin, isLoggedIn } from "../authorization/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setCredentials({
      ...credentials,
      [field]: actualValue,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (credentials.email.trim() === "" || credentials.password.trim() === "") {
      console.log("Email or Password is required !!");
      return;
    }

    loginUser(credentials)
      .then((data) => {
        doLogin(data, () => {
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Login Details</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={(e) => handleChange(e, "email")}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={(e) => handleChange(e, "password")}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
