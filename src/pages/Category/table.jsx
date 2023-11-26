import React from "react";
import { Link } from "react-router-dom";
import { config } from "../../config";
import ButtonEdit from "../../components/atoms/ButtonEdit";
import ButtonDelete from "../../components/atoms/ButtonDelete";

export default function TableCategories({
  currentItems,
  handleDelete,
  page,
  limit,
}) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Slug
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems &&
            currentItems.map((item, index) =>
              item ? (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50  dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4 ">{index + 1 + (page - 1) * limit}</td>
                  <td scope="row" className="font-medium text-black">
                    {item?.name}
                  </td>
                  <td className="px-6 py-4">
                    <img
                      src={`${config.api_host}/${item?.image}`}
                      alt={item?.id}
                      className="w-24 max-h-28"
                    />
                  </td>
                  <td className="px-6 py-4">{item?.slug}</td>
                  <td className="px-6 py-4 flex  items-center my-auto space-x-2 ">
                    <Link to={`/category/edit/${item?.id}`}>
                      <ButtonEdit />
                    </Link>
                    <ButtonDelete handleDelete={() => handleDelete(item?.id)} />
                  </td>
                </tr>
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    <h2 className="text-lg text-slate-700">
                      Category Not Found
                    </h2>
                  </td>
                </tr>
              )
            )}
        </tbody>
      </table>
    </div>
  );
}
