"use client";

import React from "react";
import { Line } from "react-chartjs-2";
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
  Filler,
} from "chart.js";
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
  Filler,
);

export const Linechart = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const {
    chartFont,
    chartPadding,
    chartBorderWidth,
    chartPointRadius,
    TooltipTitleFont,
    TooltipBodyFont,
    TooltipPadding,
  } = useResponsiveChart();

  const ChartData = {
    labels: [
      "5K",
      "10K",
      "15K",
      "20K",
      "25K",
      "30K",
      "35K",
      "40K",
      "45K",
      "50K",
      "55K",
      "60K",
    ],
    datasets: [
      {
        label: "Monthly Sales",
        data: [
          { x: 5, y: 20 },
          { x: 8, y: 30 },
          { x: 10, y: 45 },
          { x: 14, y: 48 },
          { x: 15, y: 23 },
          { x: 18, y: 48 },
          { x: 21, y: 85 },
          { x: 24, y: 44 },
          { x: 28, y: 56 },
          { x: 33, y: 60 },
          { x: 35, y: 22 },
          { x: 38, y: 23 },
          { x: 44, y: 42 },
          { x: 43, y: 77 },
          { x: 45, y: 60 },
          { x: 46, y: 63 },
          { x: 54, y: 58 },
          { x: 55, y: 41 },
          { x: 56, y: 58 },
          { x: 59, y: 59 },
          { x: 75, y: 80 },
        ],
        fill: true,
        backgroundColor: "rgba(67, 121, 238, 0.2)",
        borderColor: "#4880FF",
        borderWidth: chartBorderWidth(),
        tension: 0,
        pointBackgroundColor: "#4880FF",
        pointBorderColor: "#4880FF",
        pointBorderWidth: 1,
        pointHoverBackgroundColor: "#4880FF",
        pointRadius: chartPointRadius(),
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: "index",
    },
    plugins: {
      title: {
        display: false,
        text: "Sample Bar Chart",
      },
      legend: {
        display: false,
        position: "top",
      },
      tooltip: {
        enabled: true,
        backgroundColor: isDark ? "#4880FF" : "#FFF",
        titleColor: isDark ? "#FFF" : "#000",
        bodyColor: isDark ? "#FFF" : "#333",
        borderColor: "#4880FF",
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
          title: (items) => {
            const point = items[0].raw as { x: number; y: number };
            return `${point.x}K`;
          },
          label: (tooltipItem) => {
            const point = tooltipItem.raw as { x: number; y: number };
            return `${tooltipItem.dataset.label}: ${point.y}%`;
          },
        },
      },
    },
    scales: {
      x: {
        type: "linear",
        ticks: {
          callback: function (value) {
            return value + "K";
          },
          stepSize: 5,
          font: {
            size: chartFont(),
            weight: "bold",
          },
          color: isDark ? "rgba(255, 255, 255, 0.7)" : "rgba(43, 48, 52, 0.3)",
        },
        min: 5,
        max: 60,
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          callback: function (value) {
            return value + "%";
          },
          padding: chartPadding(),
          font: {
            size: chartFont,
            weight: "bold",
          },
          color: isDark ? "rgba(255, 255, 255, 0.7)" : "rgba(43, 48, 52, 0.3)",
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
    <div className="w-full xl-desktop:h-[600px] laptop:h-[460px] tablet:h-[400px] sm-mobile:h-[350px] h-[280px] m-auto">
      <Line data={ChartData} options={options} />
    </div>
  );
};
