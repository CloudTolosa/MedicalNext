import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-row justify-content-start">
      <Sidebar />
      <main className="p-4 flex-fill">
        {children}
      </main>
    </div>
  );
};

export default Layout;