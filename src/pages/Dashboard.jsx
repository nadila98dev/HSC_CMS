import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import RouteAdmin from "./Route";
import Chart from "chart.js/auto";
import { getData } from "../utils/fetch";

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const chartRef = useRef(null);
  const [data, setData] = useState([
    10, 20, 30, 10, 20, 30, 10, 20, 30, 10, 20, 30,
  ]);
  const myChart = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (myChart.current) {
        myChart.current.destroy(); // Hancurkan grafik sebelumnya
      }

      const ctx = chartRef.current.getContext("2d");
      myChart.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Mei",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Okt",
            "Nov",
            "Des",
          ],
          datasets: [
            {
              label: "Transactions",
              data: data,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [data]);

  const fetchData = async () => {
    const res = await getData("/auth/count");

    setItems(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <RouteAdmin>
      <div className=" my-3 flex justify-between items-center">
        <h1 className=" font-bold text-xl">Dashboard Page</h1>
        <Breadcrumb firsttag={"Home"} />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mb-10">
        <a
          href="#"
          className="justify-center flex flex-col mx-auto max-w-sm p-6 bg-sky-200 w-full border border-gray-200 rounded-lg shadow hover:bg-slate-200 "
        >
          <h5 className="mb-2 text-lg font-bold tracking-tight mx-auto text-gray-900 dark:text-white">
            Total User
          </h5>
          <p className=" text-gray-700 font-semibold text-xl dark:text-gray-400 mx-auto">
            {items?.user}
          </p>
        </a>
        <a
          href="#"
          className="justify-center flex flex-col mx-auto max-w-sm p-6 bg-yellow-200 w-full border border-gray-200 rounded-lg shadow hover:bg-slate-200 "
        >
          <h5 className="mb-2 text-lg font-bold tracking-tight mx-auto text-gray-900 dark:text-white">
            Total Category
          </h5>
          <p className=" text-gray-700 font-semibold text-xl dark:text-gray-400 mx-auto">
            {items?.category}
          </p>
        </a>
        <a
          href="#"
          className="justify-center flex flex-col mx-auto max-w-sm p-6 bg-green-200 w-full border border-gray-200 rounded-lg shadow hover:bg-slate-200 "
        >
          <h5 className="mb-2 text-lg font-bold tracking-tight mx-auto text-gray-900 dark:text-white">
            Total Items
          </h5>
          <p className=" text-gray-700 font-semibold text-xl dark:text-gray-400 mx-auto">
            {items?.items}
          </p>
        </a>
        <a
          href="#"
          className="text-center mx-auto max-w-sm p-6 bg-red-200 w-full border border-gray-200 rounded-lg shadow hover:bg-slate-200 "
        >
          <h5 className="mb-2 text-lg font-bold tracking-tight mx-auto text-gray-900 dark:text-white">
            Total Transaction
          </h5>
          <p className=" text-gray-700 font-semibold text-xl dark:text-gray-400 mx-auto">
            {items?.transaction}
          </p>
        </a>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <canvas ref={chartRef}></canvas>
        {/* <button onClick={() => setData([40, 10, 60])}>Ubah Data Grafik</button> */}
      </div>
    </RouteAdmin>
  );
}
