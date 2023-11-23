import React from "react";

export default function ButtonDelete({ handleDelete }) {
  return (
    <button
      type="button"
      onClick={handleDelete}
      className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm h-9 w-9 p-3 flex justify-center items-center text-center mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mt-3 md:mt-0"
    >
      <svg
        className="w-6 h-6 text-white dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 20"
      >
        <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
      </svg>
    </button>
  );
}
