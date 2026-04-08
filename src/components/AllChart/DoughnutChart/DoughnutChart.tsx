"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  ArcElement,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  Tooltip,
} from "chart.js";
import { useTheme } from "@/context/theme-context";
import { useResponsiveChart } from "@/hooks";

ChartJS.register(Tooltip, Legend, ArcElement);

export const DoughnutChart = () => {
  const customerData = [20000, 5000];
  const customerLabels = ["New Customers", "Repeted Customers"];

  const { TooltipPadding, TooltipBodyFont, TooltipTitleFont } =
    useResponsiveChart();

  const { theme } = useTheme();
  const isDark = theme === "dark";

  const chartData = {
    labels: customerLabels,
    datasets: [
      {
        data: customerData,
        backgroundColor: isDark
          ? ["#6494FF", "#C0D2F0"]
          : ["#4880FF", "rgba(67, 121, 238, 0.3)"],
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#fff",
        bodyColor: "#000",
        borderColor: "#4880FF",
        titleColor: "#4880FF",
        borderWidth: 1,
        displayColors: false,
        padding: TooltipPadding(),
        titleFont: {
          size: TooltipTitleFont(),
          weight: "bold",
        },
        bodyFont: {
          size: TooltipBodyFont(),
          weight: "bold",
        },
      },
    },
  };

  const [newCustomers, repeatedCustomers] = customerData;

  return (
    <>
      <div className="w-full xl-desktop:h-[500px] tablet:h-[400px] sm-mobile:h-[350px] h-[280px] m-auto">
        <Doughnut data={chartData} options={options} />
      </div>
      <div className="sm-mobile:mt-12 mt-8 flex sm-mobile:flex-row flex-col items-center gap-4">
        <div className="flex flex-col items-center sm-mobile:w-[50%] w-full">
          <span className="xl-desktop:text-32 sm-mobile:text-28 text-22 font-semibold text-text-secondary block">
            {newCustomers.toLocaleString()}
          </span>
          <div className="flex items-center gap-2">
            <span
              className={`xl-desktop:size-[14px] size-[12px] rounded-full block ${
                isDark ? "bg-[#6494FF]" : "bg-[#4880FF]"
              }`}
            ></span>
            <span className="xl-desktop:text-16 text-14 font-medium text-text-secondary">
              New Customers
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center sm-mobile:w-[50%] w-full">
          <span className="xl-desktop:text-32 sm-mobile:text-28 text-22 font-semibold text-text-secondary block">
            {repeatedCustomers.toLocaleString()}
          </span>
          <div className="flex items-center gap-2">
            <span
              className={`xl-desktop:size-[14px] size-[12px] rounded-full block ${
                isDark ? "bg-[#C0D2F0]" : "bg-[rgba(67,121,238,0.3)]"
              }`}
            ></span>
            <span className="xl-desktop:text-16 text-14 font-medium text-text-secondary">
              Repeated Customers
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
