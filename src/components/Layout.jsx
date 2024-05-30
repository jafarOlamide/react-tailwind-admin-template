import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./navigation/SideBar";
import NavBar from "./navigation/NavBar";

const Layout = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <SideBar />
      <div className=" flex-1 relative flex flex-col overflow-y-auto overflow-x-hidden">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
