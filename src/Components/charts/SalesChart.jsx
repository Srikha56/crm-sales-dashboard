import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);


function SalesChart() {

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
    ],

    datasets: [
      {
        label: "Sales",
        data: [
          15000,
          22000,
          18000,
          30000,
          26000,
          40000,
        ],
        tension: 0.4,
      },
    ],
  };


  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: "top",
      },
    },
  };


  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">

      <h2 className="mb-4 text-xl font-semibold">
        Sales Overview
      </h2>

      <Line
        data={data}
        options={options}
      />

    </div>
  );
}


export default SalesChart;