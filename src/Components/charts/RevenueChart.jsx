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

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Revenue",
      data: [12000, 18000, 16000, 25000, 22000, 30000],
      borderColor: "#2563eb",
      backgroundColor: "rgba(37,99,235,0.2)",
      tension: 0.4,
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

function RevenueChart() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
      <h2 className="mb-4 text-lg font-semibold">Revenue Overview</h2>
       <Line data={data} options={options} />
    </div>
  );
}

export default RevenueChart;