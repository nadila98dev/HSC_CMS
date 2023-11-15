import React, { useEffect, useState } from "react";
import TemplateCategory from "./template";
import { Link, useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import RouteAdmin from "../Route";
import { getData, putData } from "../../utils/fetch";
import { config } from "../../config";
import { toast } from "react-toastify";
import axios from "axios";

export default function UsersEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [updatePassword, setUpdatePassword] = useState(false);
  console.log(form);
  const fetchData = async () => {
    const res = await axios(`${config.api_image}/users/${id}`);
    if (res.data.error === false) {
      setForm({
        ...form,
        name: res.data.data.name,
        email: res.data.data.email,
        // password: res.data.data.password,
      });
    }
  };
  const handleChange = async (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const payload = {
      name: form.name,
      email: form.email,
    };

    if (form.password.trim() !== "") {
      payload.password = form.password;
    }
    console.log(payload);

    const res = await axios.put(`${config.api_image}/users/${id}`, payload);
    if (res?.data?.error === false) {
      toast.success("Created Users Success", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/users");
    } else if (res?.response?.data?.error) {
      toast.error(res?.response?.data?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error(res.response?.data.message[0].message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <RouteAdmin>
      <div className=" my-3 flex justify-between items-center">
        <h1 className=" font-bold text-xl">Users Edit</h1>
        <Breadcrumb firsttag={"Home"} secondtag={"Users"} thirdtag={"edit"} />
      </div>

      <form className="mt-10">
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="text"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
      <div className="flex space-x-3">
        <button
          onClick={handleSubmit}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        <Link to={"/users"}>
          <button className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
            Back
          </button>
        </Link>
      </div>
    </RouteAdmin>
  );
}
