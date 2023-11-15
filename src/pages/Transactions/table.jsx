import React from "react";
import { Link } from "react-router-dom";

export default function TableTransactions({ currentItems, itemPrev }) {
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
              Trx Id
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Trx Item
            </th>
            <th scope="col" className="px-6 py-3">
              Total Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems &&
            currentItems.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4 ">{index + 1 + itemPrev}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.trxId}</td>
                <td className="px-6 py-4">{item.price}</td>
                <td className="px-6 py-4">{item.trxItem}</td>
                <td className="px-6 py-4">{item.totalPrice}</td>
                <td className="px-6 py-4 flex flex-row space-x-2">
                  <Link to={"/transactions/update"}>
                    <button
                      type="button"
                      className={`text-white ${
                        item.status === "Success"
                          ? "bg-teal-400 hover:bg-teal-800"
                          : item.status === "Failed"
                          ? "bg-red-400 hover:bg-red-800"
                          : "bg-yellow-400 hover:bg-yellow-800"
                      } focus:outline-none focus:ring-4 focus:ring-teal-300 font-medium rounded-full text-sm px-3 py-1.5 text-center mb-2  mt-3 md:mt-0`}
                    >
                      {item.status}
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
