import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-gradient-to-r from-sky-400 to-blue-500 min-h-screen">
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
