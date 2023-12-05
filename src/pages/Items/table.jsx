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
            <td className="p-4">No</td>
            <td className="px-6 py-3">Title</td>
            <td className="px-6 py-3">Category</td>
            <td className="px-6 py-3">Image</td>
            <td className="px-6 py-3">Description</td>
            <td className="px-6 py-3">Date Update</td>
            <td className="px-6 py-3">Action</td>
          </tr>
        </thead>
        <tbody>
          {currentItems &&
            currentItems.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4 ">{index + 1 + (page - 1) * limit}</td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.name || "N/A"}
                </td>
                <td className="px-6 py-4">{item.items?.id_category || "N/A"}</td>
                <td className="px-6 py-4">
                  {item.image && (
                    <img
                      src={`${config.api_image}/${item.image}`}
                      alt={item.name || "Item Image"}
                      className="w-24 max-h-28"
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
            ))}
        </tbody>
      </table>
    </div>
  );
}
