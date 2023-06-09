import * as React from "react";
import { isLoggedIn } from "../authorization/auth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  return isLoggedIn() ? <Outlet /> : <Navigate to="/" replace={true} />;
};

export default PrivateRoutes;
