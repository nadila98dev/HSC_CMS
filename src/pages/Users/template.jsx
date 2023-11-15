import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Breadcrumb from "../../components/Breadcrumb";
import { Link } from "react-router-dom";

export default function TemplateCategory({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full ">
        <Navbar />
        <div className="px-5 pt-5 ">
          <div className="bg-white p-5 shadow-card  rounded-lg ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
