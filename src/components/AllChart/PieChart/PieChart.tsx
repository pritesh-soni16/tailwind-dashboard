"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import {
  ArcElement,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  Tooltip,
} from "chart.js";
import ChartDataLabels, { Context } from "chartjs-plugin-datalabels";
import { useResponsiveChart } from "@/hooks";

ChartJS.register(Tooltip, Legend, ArcElement);

export const PieChart = () => {
  const { chartFont } = useResponsiveChart();

  const ProductData = [20, 15, 50, 25, 30];
  const ProductLabels = [
    "Smartphones",
    "Laptops",
    "T-shirts",
    "Shoes",
    "Headphones",
  ];

  const chartData = {
    labels: ProductLabels,
    datasets: [
      {
        data: ProductData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
        ],
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: "#fff",
        font: {
          size: chartFont(),
          weight: "bold",
        },
        formatter: (value: number, ctx: Context) => {
          const label = ctx.chart.data.labels?.[ctx.dataIndex];
          return label;
        },
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  const [smartPhones, laptops, shirts, shoes, headphones] = ProductData;

  return (
    <>
      <div className="w-full xl-desktop:h-[500px] tablet:h-[400px] sm-mobile:h-[350px] h-[280px] m-auto">
        <Pie data={chartData} options={options} plugins={[ChartDataLabels]} />
      </div>
      <div className="mt-12 grid grid-cols-2 xxl-desktop:gap-4 gap-3">
        <div className="flex items-center justify-start gap-2">
          <span className="w-[10px] h-[10px] bg-[rgba(255,99,132,0.7)] rounded-full block"></span>
          <span className="xxl-desktop:text-16 text-14 font-semibold text-text-secondary block">
            {`${smartPhones.toLocaleString()}%`} SmartPhones
          </span>
        </div>
        <div className="flex items-center justify-start gap-2">
          <span className="w-[10px] h-[10px] bg-[rgba(54,162,235,0.7)] rounded-full block"></span>
          <span className="xxl-desktop:text-16 text-14 font-semibold text-text-secondary block">
            {`${laptops.toLocaleString()}%`} Laptops
          </span>
        </div>
        <div className="flex items-center justify-start gap-2">
          <span className="w-[10px] h-[10px] bg-[rgba(255,206,86,0.7)] rounded-full block"></span>
          <span className="xxl-desktop:text-16 text-14 font-semibold text-text-secondary block">
            {`${shirts.toLocaleString()}%`} T-Shirts
          </span>
        </div>
        <div className="flex items-center justify-start gap-2">
          <span className="w-[10px] h-[10px] bg-[rgba(75,192,192,0.7)] rounded-full block"></span>
          <span className="xxl-desktop:text-16 text-14 font-semibold text-text-secondary block">
            {`${shoes.toLocaleString()}%`} Shoes
          </span>
        </div>
        <div className="flex items-center justify-start gap-2">
          <span className="w-[10px] h-[10px] bg-[rgba(153,102,255,0.7)] rounded-full block"></span>
          <span className="xxl-desktop:text-16 text-14 font-semibold text-text-secondary block">
            {`${headphones.toLocaleString()}%`} Shoes
          </span>
        </div>
      </div>
    </>
  );
};
