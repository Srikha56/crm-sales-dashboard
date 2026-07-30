import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function LeadsChart() {

  const data = {
    labels: [
      "Converted",
      "Pending",
      "Lost",
    ],

    datasets: [
      {
        data: [60, 25, 15],
        backgroundColor: [
          "#22c55e",
          "#eab308",
          "#ef4444",
        ],
        borderWidth: 0,
      },
    ],
  };


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },

    cutout: "70%",
  };


  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">

      <h2 className="mb-4 text-xl font-semibold">
        Lead Status
      </h2>

      <div className="h-64 flex justify-center">
        <Doughnut 
          data={data}
          options={options}
        />
      </div>

    </div>
  );
}


export default LeadsChart