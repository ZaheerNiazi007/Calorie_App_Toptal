import React from "react";
// Chart Component
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
// ----------------------------------------------------------------------
ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
  },
};
export default function PieChart({ xLabels, values }) {
  const data = {
    labels: ["calories"],
    datasets: [
      {
        label: "# of Votes",
        data: [60, 10],
        backgroundColor: ["#0169D9", "white"],
        borderColor: ["rgb(240,240,240)"],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} options={options} />;
}
