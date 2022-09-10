import React from "react";
import { Outlet } from "react-router-dom";
import Register from "../pages/register/Register";

const PrivateRouter = () => {
  const user = true;
  return user ? <Outlet /> : <Register />;
};

export default PrivateRouter;
