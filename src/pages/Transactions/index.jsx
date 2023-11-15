import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Breadcrumb from "../../components/Breadcrumb";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
import RouteAdmin from "../Route";
import TableItems from "./table";
import { getData } from "../../utils/fetch";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../redux/slices/transactionsSlice";

export default function Transactions() {
  const itemPerPage = 5;
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemPrev, setItemPrev] = useState(0);

  const dispatch = useDispatch();
  const items = useSelector((state) => state.transaction.data);

  useEffect(() => {
    const itemsCount = itemPrev + itemPerPage;
    setCurrentItems(items.slice(itemPrev, itemsCount));
    setPageCount(Math.ceil(items.length / itemPerPage));
  }, [itemPrev, itemPerPage, items]);

  // Invoke when user click to request another page.
  const handlePageClick = ({ selected }) => {
    const itemsPrev = (selected * itemPerPage) % items.length;
    setItemPrev(itemsPrev);
  };

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <RouteAdmin>
      <div className=" my-3 flex justify-between items-center">
        <h1 className=" font-bold text-xl">Transactions Page</h1>
        <Breadcrumb firsttag={"Home"} secondtag={"Transactions"} />
      </div>
      <div className="flex flex-wrap justify-between mb-5 items-center">
        <div className="bg-white dark:bg-gray-900">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1 max-w-fit">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg max-w-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              placeholder="Search for items"
            />
          </div>
        </div>
      </div>
      <TableItems currentItems={currentItems} itemPrev={itemPrev} />
      <div className="mt-3 text-center">
        <Pagination pages={pageCount} handlePageClick={handlePageClick} />
      </div>
    </RouteAdmin>
  );
}
