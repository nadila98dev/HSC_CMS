import axios from "axios";
import React, { useEffect, useState } from "react";
import { config } from "../config";

export default function Navbar() {
  const [data, setData] = useState({});
  const token = localStorage.getItem("token");
  const fetchData = async () => {
    const res = await axios(`${config.api_image}/users/detail`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    setData(res?.data?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-nowrap justify-between bg-primary text-white shadow-md bg-opacity-90 px-5 py-3">
      <div className="flex items-center">
        <img src="/icon/toggles.png" alt="" className="h-7 md:hidden" />
        <h1 className="hidden md:block">Wonderfull Jogja</h1>
      </div>
      <div className="flex items-center space-x-2">
        <h1>Hello, {data.name}</h1>
        <img src="/icon/person.png" alt="" className="h-6" />
      </div>
    </div>
  );
}
