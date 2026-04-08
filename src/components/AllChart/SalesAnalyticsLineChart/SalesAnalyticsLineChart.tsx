import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  TooltipItem,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useTheme } from "@/context/theme-context";
import { useResponsiveChart } from "@/hooks";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const SalesAnalyticsLineChart = () => {
  const {
    chartFont,
    TooltipPadding,
    TooltipBodyFont,
    TooltipTitleFont,
    chartPadding,
    chartThickBorderWidth,
    chartBigPointRadius,
    chartBigBorderWidth,
  } = useResponsiveChart();

  const Salesdata = {
    labels: ["2015", "2016", "2017", "2018", "2019", "2020"],
    datasets: [
      {
        label: "Customers",
        data: [25, 55, 70, 45, 92, 75],
        borderColor: "#3b82f6",
        borderWidth: chartThickBorderWidth(),
        backgroundColor: "#3b82f6",
        tension: 0.4,
        pointBackgroundColor: "#10b981",
        pointBorderColor: "#3b82f6",
        pointBorderWidth: chartBigBorderWidth(),
        pointRadius: chartBigPointRadius(),
      },
      {
        label: "Revenue",
        data: [0, 40, 60, 30, 80, 65],
        borderColor: "#10b981",
        borderWidth: chartThickBorderWidth(),
        backgroundColor: "#10b981",
        tension: 0.4,
        pointBackgroundColor: "#10b981",
        pointBorderColor: "#fff",
        pointBorderWidth: chartBigBorderWidth(),
        pointRadius: chartBigPointRadius(),
      },
    ],
  };

  const { theme } = useTheme();
  const isDark = theme === "dark";

  const Salesoptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
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
          label: function (context: TooltipItem<"line">) {
            const label = context.dataset.label || "";
            const value = context.parsed.y || 0;
            return `${label}: ${value.toLocaleString()}`;
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
          stepSize: 25,
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
          stepSize: 25,
          font: {
            size: chartFont(),
            weight: "bold",
          },
          color: isDark ? "rgba(255, 255, 255, 0.7)" : "rgba(43, 48, 52, 0.3)",
          padding: chartPadding(),
        },
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
        <Line data={Salesdata} options={Salesoptions} />
      </div>
    </>
  );
};
