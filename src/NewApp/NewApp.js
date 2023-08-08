import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const AppV1 = () => {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppV1;
