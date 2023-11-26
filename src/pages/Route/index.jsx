import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

export default function RouteAdmin({ children }) {
  const [showNav, setShowNav] = useState(false);
  console.log(showNav);
  return (
    <div className="flex">
      <Sidebar showNav={showNav} />
      <div className="w-full ">
        <Navbar onClick={() => setShowNav(!showNav)} />
        <div className="px-5 pt-5">
          <div className="bg-white p-5 shadow-card  rounded-lg ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
