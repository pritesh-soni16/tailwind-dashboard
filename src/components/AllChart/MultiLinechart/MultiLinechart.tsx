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
);

export const MultiLinechart = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const {
    chartFont,
    TooltipPadding,
    TooltipBodyFont,
    TooltipTitleFont,
    chartPadding,
    chartLegendPadding,
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
          { x: 10, y: 30 },
          { x: 15, y: 25 },
          { x: 20, y: 22 },
          { x: 26, y: 55 },
          { x: 29, y: 30 },
          { x: 35, y: 90 },
          { x: 42, y: 40 },
          { x: 48, y: 63 },
          { x: 53, y: 30 },
          { x: 56, y: 58 },
          { x: 60, y: 20 },
        ],
        fill: true,
        backgroundColor: "rgba(255, 143, 109, 0.8)",
        borderWidth: 0,
        tension: 0.4,
        pointRadius: 0,
        pointBackgroundColor: "rgba(0,0,0,0)",
        pointBorderColor: "rgba(0,0,0,0)",
      },
      {
        label: "Revenue",
        data: [
          { x: 5, y: 20 },
          { x: 10, y: 70 },
          { x: 17, y: 30 },
          { x: 29, y: 45 },
          { x: 34, y: 25 },
          { x: 42, y: 59 },
          { x: 48, y: 25 },
          { x: 57, y: 90 },
          { x: 60, y: 20 },
        ],
        fill: true,
        backgroundColor: "rgba(219, 165, 255, 0.8)",
        borderWidth: 0,
        tension: 0.4,
        pointRadius: 0,
        pointBackgroundColor: "rgba(0,0,0,0)",
        pointBorderColor: "rgba(0,0,0,0)",
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
        display: true,
        position: "bottom",
        labels: {
          useBorderRadius: true,
          borderRadius: 5,
          boxWidth: 10,
          boxHeight: 10,
          color: isDark ? "#fff" : "#000",
          padding: chartLegendPadding(),
          font: {
            size: chartFont(),
            weight: "bold",
          },
        },
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
            return value + "%"; //
          },
          padding: chartPadding(),
          stepSize: 20,
          font: {
            size: chartFont(),
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
