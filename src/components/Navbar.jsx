import axios from "axios";
import React, { useEffect, useState } from "react";
import { config } from "../config";
import Cookies from "js-cookie";

export default function Navbar({ onClick }) {
  const [data, setData] = useState({});
  const token = Cookies.get("token");
  const fetchData = async () => {
    const res = await axios(`${config.api_host_url}/auth/detail`, {
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
        <div onClick={onClick}>
          <img src="/icon/toggles.png" alt="" className="h-7 md:hidden" />
        </div>
        <h1 className="hidden md:block">Wonderfull Jogja</h1>
      </div>
      <div className="flex items-center space-x-2">
        <h1>Hello, {data.name}</h1>
        <img src="/icon/person.png" alt="" className="h-6" />
      </div>
    </div>
  );
}
