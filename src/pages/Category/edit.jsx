import React, { useEffect, useState } from "react";
import TemplateCategory from "./template";
import { Link, useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import RouteAdmin from "../Route";
import { getData, putData } from "../../utils/fetch";
import { config } from "../../config";
import { toast } from "react-toastify";

export default function CategoryEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    image: null,
  });
  const fetchData = async () => {
    const res = await getData(`/categories/${id}`);
    if (res.data.error === false) {
      setForm({
        ...form,
        name: res.data.data.name,
        image: res.data.data.image,
      });
    }
  };
  const handleChange = async (e) => {
    if (e.target.name === "image") {
      if (
        e?.target?.files[0]?.type === "image/jpg" ||
        e?.target?.files[0]?.type === "image/png" ||
        e?.target?.files[0]?.type === "image/jpeg"
      ) {
        var size = parseFloat(e.target.files[0].size / 3145728).toFixed(2);

        if (size > 1.5) {
          toast.error("Please select image size less than 2 MB", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setForm({
            ...form,
            image: null,
            [e.target.name]: "",
          });
        } else {
          const selectedImage = e.target.files[0];

          setForm({ ...form, [e.target.name]: selectedImage });
        }
      } else {
        toast.error("Image Not Valid", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setForm({
          ...form,
          image: null,
          [e.target.name]: "",
        });
      }
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async () => {
    const payload = {
      name: form.name,
      image: form.image,
    };

    const res = await putData(`/categories/${id}`, payload);
    if (res?.data?.error === false) {
      toast.success("Created Category Success", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/category");
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
        <h1 className=" font-bold text-xl">Category Edit</h1>
        <Breadcrumb
          firsttag={"Home"}
          secondtag={"Category"}
          thirdtag={"edit"}
        />
      </div>

      <form className="mt-10">
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <div>
            <label
              htmlFor="visitors"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category Name
            </label>
            <input
              type="text"
              id="visitors"
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
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="file_input"
            >
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
              name="image"
              onChange={handleChange}
            />
            <p
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="file_input_help"
            >
              PNG, JPG (MAX. 2MB).
            </p>
            {form.image ? (
              <img
                src={`${config.api_image}/${form.image}`}
                className="w-44 mt-5 rounded-md"
              />
            ) : (
              ""
            )}
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
        <Link to={"/category"}>
          <button className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
            Back
          </button>
        </Link>
      </div>
    </RouteAdmin>
  );
}
