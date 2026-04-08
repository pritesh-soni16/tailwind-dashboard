import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useTheme } from "@/context/theme-context";
import { useResponsiveChart } from "@/hooks";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = () => {
  const {
    chartFont,
    TooltipPadding,
    TooltipBodyFont,
    TooltipTitleFont,
    chartPadding,
  } = useResponsiveChart();

  const Salesdata = {
    labels: ["Apple", "Samsung", "Xiaomi", "Oppo", "Vivo", "OnePlus"],
    datasets: [
      {
        label: "Customers",
        data: [30, 25, 15, 10, 8, 12],
        borderWidth: 0,
        backgroundColor: "#4880FF",
      },
    ],
  };

  const { theme } = useTheme();
  const isDark = theme === "dark";

  const Salesoptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enable: true,
        backgroundColor: "#fff",
        bodyColor: "#000",
        titleColor: "#4880FF",
        borderColor: "#4379EE",
        borderWidth: 1,
        cornerRadius: 10,
        padding: TooltipPadding(),
        displayColors: false,
        titleFont: {
          size: TooltipTitleFont(),
          weight: "bold",
        },
        bodyFont: {
          size: TooltipBodyFont(),
        },
        callbacks: {
          label: function (context: any) {
            const label = context.dataset.label || "";
            const value = context.parsed.y || 0;
            return `${label}: ${value.toLocaleString()}%`;
          },
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: chartFont(),
            weight: "bold",
          },
          color: isDark ? "rgba(255, 255, 255, 0.7)" : "rgba(43, 48, 52, 0.3)",
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5,
          font: {
            size: chartFont(),
            weight: "bold",
          },
          color: isDark ? "rgba(255, 255, 255, 0.7)" : "rgba(43, 48, 52, 0.3)",
          padding: chartPadding(),
        },
        max: 35,
        border: {
          display: false,
        },
        grid: {
          color: isDark ? "rgba(207, 207, 207, 0.2)" : "#E0E0E0",
        },
      },
    },
  };

  return (
    <>
      <div className="w-full xl-desktop:h-[600px] tablet:h-[400px] sm-mobile:h-[350px] h-[280px] m-auto">
        <Bar data={Salesdata} options={Salesoptions} />
      </div>
    </>
  );
};
