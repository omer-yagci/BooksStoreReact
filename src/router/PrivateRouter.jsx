import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../pages/login/Login";
import { UseBooksContext } from "../context/AutContext";

const PrivateRouter = () => {
  const { currentUser } = UseBooksContext();

  return currentUser ? <Outlet /> : <Login />;
};

export default PrivateRouter;
