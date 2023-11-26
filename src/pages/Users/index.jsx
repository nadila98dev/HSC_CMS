import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
import RouteAdmin from "../Route";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import TableCategories from "./table";
import { useDispatch, useSelector } from "react-redux";
import { deleteData } from "../../utils/fetch";
import { fetchUsers } from "../../redux/users/actions";

export default function Users() {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const users = useSelector((state) => state.users.data);
  const currentPage = useSelector((state) => state.users.currentPage);
  // const pageCount = useSelector((state) => state.users.totalPages);
  const currentItems = useSelector((state) => state.category.currentItems);

  const limit = 5;

  const page = Math.ceil(currentItems / limit);

  const [toPage, setToPage] = useState(currentPage);

  // Invoke when user click to request another page.
  const handlePageClick = ({ selected }) => {
    console.log(selected + 1);
    setToPage(selected + 1);
  };

  useEffect(() => {
    dispatch(fetchUsers(toPage, limit, keyword));
  }, [dispatch, toPage, keyword]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you Sure Delete Category?",
      text: "Anda tidak akan dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Iya, Hapus",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteData(`/admin/${id}`);
        console.log(res);
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      window.location.reload();
    });
  };

  return (
    <RouteAdmin>
      <div className=" my-3 flex justify-between items-center">
        <h1 className=" font-bold text-xl">Users Page</h1>
        <Breadcrumb firsttag={"Home"} secondtag={"Users"} />
      </div>
      <div className="flex flex-wrap justify-between mb-5 items-center">
        <div className="  bg-white dark:bg-gray-900">
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
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              id="table-search"
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg max-w-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              placeholder="Search for items"
            />
          </div>
        </div>
        <Link to={"/users/create"}>
          <button
            type="button"
            className="text-white bg-primary hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3 md:mt-0"
          >
            + Create
          </button>
        </Link>
      </div>
      <TableCategories
        currentItems={users}
        page={currentPage}
        handleDelete={handleDelete}
      />
      <div className="mt-3 text-center">
        <Pagination pages={page} handlePageClick={handlePageClick} />
      </div>
    </RouteAdmin>
  );
}
