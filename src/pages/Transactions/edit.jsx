import React from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import RouteAdmin from "../Route";

export default function TransactionsEdit() {
  const { id } = useParams();
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
        <div className="grid gap-6 mb-6 md:grid-cols-2">
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
            />
          </div>
        </div>
        <div className="flex space-x-3">
          <button
            type="submit"
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
      </form>
    </RouteAdmin>
  );
}
