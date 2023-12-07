import React from "react";
import { Link } from "react-router-dom";
import { config } from "../../config";
import ButtonEdit from "../../components/atoms/ButtonEdit";
import ButtonDelete from "../../components/atoms/ButtonDelete";

export default function TableItems({ currentItems, handleDelete, page, limit }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Date Update
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
        {currentItems.map((item, index) => (
          item ? (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="w-4 p-4">
                {index + 1 + (page - 1) * limit}
              </td>
              <td scope="row" className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.name || "N/A"}
              </td>
              <td className="px-6 py-4">{item.items?.categoryId || "N/A"}</td>
              <td className="px-6 py-4">
                {item.image && (
                  <img
                    src={`${config.api_host}/${item?.image}`}
                    alt={item.name || "Item Image"}
                    className="w-24 max-h-28"
                    onError={(e) => console.error("Image load error:", e)}
                  />
                )}
              </td>
              <td className="px-6 py-4">{item.description || "N/A"}</td>
              <td className="px-6 py-4">{item.updated_at || "N/A"}</td>
              <td className="px-6 py-4 flex flex-row space-x-2">
                <Link to={`/items/edit/${item.id}`}>
                  <ButtonEdit />
                </Link>
                <ButtonDelete handleDelete={() => handleDelete(item.id)} />
              </td>
            </tr>
          ) : (
            <tr key={index}>
              <td colSpan="7" className="text-center">
                <h2 className="text-lg text-slate-700">Items Not Found</h2>
              </td>
            </tr>
          )
        ))}
        </tbody>
      </table>
    </div>
  );
}
