import React, { useState } from "react";
import { registerUser } from "../services/UserService";
import { doLogin } from "../authorization/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    ph_no: "",
  });

  const navigate = useNavigate();

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setUser({
      ...user,
      [field]: actualValue,
    });
  };

  const handleRegister = (event) => {
    event.preventDefault();

    registerUser(user)
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
      <h1>Register Details</h1>
      <form onSubmit={handleRegister}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={(e) => handleChange(e, "name")}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={(e) => handleChange(e, "email")}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={(e) => handleChange(e, "password")}
        />
        <label htmlFor="ph_no">Phone No</label>
        <input
          type="text"
          name="ph_no"
          value={user.ph_no}
          onChange={(e) => handleChange(e, "ph_no")}
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
