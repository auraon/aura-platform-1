import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export const ProgressChart = ({ data }: { data: number[] }) => {
  const chartData = {
    labels: Array.from({ length: data.length }, (_, i) => `Week ${i + 1}`),
    datasets: [{
      label: "BMI Progress",
      data,
      borderColor: "#39FF14",
      backgroundColor: "rgba(57,255,20,0.1)",
      pointBackgroundColor: "#fff",
      pointBorderColor: "#39FF14",
      tension: 0.3,
    }]
  };
  return <div style={{ maxWidth: 500, margin: "auto" }}>
    <Line data={chartData} options={{
      animation: { duration: 1500 },
      plugins: { legend: { labels: { color: "#39FF14" } } },
      scales: {
        x: { ticks: { color: "#fff" } },
        y: { ticks: { color: "#fff" } }
      }
    }} />
  </div>;
};