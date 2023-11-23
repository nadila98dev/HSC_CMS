import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "dashboard", link: "/" },
    { title: "Category", src: "category", link: "/category", gap: true },
    { title: "Items", src: "items", link: "/items" },
    { title: "Transactions", link: "/transactions" },
    { title: "Account", src: "account", link: "/users", gap: true },
    { title: "Logout", src: "logout", link: "/logout", gap: true },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    toast.success("Logout Success", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    Cookies.remove("token");
    window.location.href = "/login";
  };

  return (
    <div
      className={`${
        open ? "min-w-[200px] " : "w-20"
      } duration-300  p-3 min-h-screen pt-8  bg-primary relative hidden md:block`}
    >
      <img
        src={"/icon/arrow-left.png"}
        alt=""
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 border-primary rounded-full bg-white p-2 transition-all duration-500 ${
          open ? "" : "rotate-[180deg] "
        }`}
        onClick={() => setOpen(!open)}
      />
      <div className=" flex">
        <img
          src="/jogja.jpg"
          className={`text-white origin-left rounded-full w-24 mx-auto duration-300 ${
            !open && "scale-0"
          }`}
        />
      </div>
      <ul className="pt-6 text-white">
        {Menus.map((menu, index) => (
          <Link
            key={index}
            to={menu.link !== "/logout" ? menu.link : ""}
            onClick={menu.link === "/logout" ? handleLogout : ""}
          >
            <li
              className={`text-gray-300 text-md flex items-center gap-x-4 cursor-pointer p-2 min-w-fit hover:bg-light-white rounded-md ${
                menu.gap ? "mt-9" : "mt-2"
              } ${menu.link === location.pathname && "bg-light-white"} ${
                open ? "justify-start" : "justify-center"
              }`}
            >
              <img
                src={`/icon/${menu.src ?? "dashboard"}.png`}
                alt=""
                className=" w-5 h-5"
              />
              <span className={`${!open && "hidden"} origin-left duration-400`}>
                {menu.title}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
