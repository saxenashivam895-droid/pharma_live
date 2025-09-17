import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const KnowledgeChart = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Data for charts
  const chartData = [
    { category: "PHARMA/NUTRA/HERBAL FORMULATIONS", percentage: 39, color: "#4CAF50" },
    { category: "PHARMA & PACKAGING MACHINERY", percentage: 26, color: "#2196F3" },
    { category: "EXCIPIENTS", percentage: 15, color: "#FF9800" },
    { category: "API MANUFACTURERS", percentage: 11, color: "#F44336" },
    { category: "ANCILLARY TO PHARMA", percentage: 9, color: "#9C27B0" }
  ];

  const pieChartData = {
    labels: chartData.map(item => item.category),
    datasets: [
      {
        data: chartData.map(item => item.percentage),
        backgroundColor: chartData.map(item => item.color),
        borderColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 2,
        hoverOffset: 15,
      },
    ],
  };

  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: isMobile ? true : false,
        position: isMobile ? "bottom" : "right",
        labels: {
          color: "white",
          font: { size: isMobile ? 12 : 13 },
          padding: 12,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}%`,
        },
      },
      datalabels: !isMobile
        ? {
            color: "white",
            formatter: (value, context) =>
              `${value}% – ${context.chart.data.labels[context.dataIndex]}`,
            font: { weight: "bold", size: 13 },
            anchor: "end",
            align: "end",
            offset: 8,
            clip: false,
            clamp: true,
          }
        : false,
    },
    cutout: isMobile ? "45%" : "55%",
    layout: { padding: { right: 40, left: 40, top: 30, bottom: 30 } },
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      className="p-4"
      style={{
        backdropFilter: "blur(10px)",
        background: "linear-gradient(135deg, #11233e, #0e7f41, #1e3565, #164b83)",
        boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
        minHeight: "480px",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          color: "white",
          fontSize: isMobile ? "16px" : "25px",
          marginBottom: isMobile ? "25px" : "70px", // spacing between heading & chart
          lineHeight: "1.5",
        }}
      >
        Our expo floor features a diverse range of exhibitors from key sectors:
      </h2>

      {/* Chart */}
      <div
        style={{
          height: isMobile ? "380px" : "340px",
          width: isMobile ? "100%" : "65%",
          margin: "0 auto",
          overflow: "visible",
        }}
      >
        <Doughnut data={pieChartData} options={pieChartOptions} />
      </div>
    </div>
  );
};

export default KnowledgeChart;
