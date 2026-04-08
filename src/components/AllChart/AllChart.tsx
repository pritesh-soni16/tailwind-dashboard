"use client";

import React from "react";
import "chart.js/auto";
import { Linechart } from "./Linechart";
import { MultiLinechart } from "./MultiLinechart";
import { DoughnutChart } from "./DoughnutChart";
import { SalesAnalyticsLineChart } from "./SalesAnalyticsLineChart";
import { PieChart } from "./PieChart";
import { BarChart } from "./BarChart";
import { useTheme } from "@/context/theme-context";

export const AllChart = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <section>
        <div className="flex flex-col xl-desktop:gap-8 sm-mobile:gap-6 gap-4">
          <span className="xxl-desktop:text-32 xl-desktop:text-30/[35px] sm-mobile:text-24/[32px] text-20/[26px] font-semibold text-text-secondary">
            All Chart
          </span>
          <div
            className={`bg-white-background xxl-desktop:p-[35px_35px_58px] xl-desktop:p-[30px_30px_48px] tablet:p-[24px_24px_40px] sm-mobile:p-[18px_18px_30px] p-[18px_12px_18px] rounded-[14px]  ${
              isDark ? "border border-border-fill shadow-none" : "shadow-custom"
            }`}
          >
            <span className="xxl-desktop:text-24 xl-desktop:text-22 tablet:text-20 sm-mobile:text-18 text-16 font-semibold text-text-secondary xxl-desktop:pb-[40px] xl-desktop:pb-[32px] tablet:pb-[26px] sm-mobile:pb-[20px] pb-[12px] block">
              Sales Details
            </span>
            <Linechart />
          </div>
          <div
            className={`bg-white-background xxl-desktop:p-[35px_35px_58px] xl-desktop:p-[30px_30px_48px] tablet:p-[24px_24px_40px] sm-mobile:p-[18px_18px_30px] p-[18px_12px_18px] rounded-[14px] ${
              isDark ? "border border-border-fill shadow-none" : "shadow-custom"
            }`}
          >
            <span className="xxl-desktop:text-24 xl-desktop:text-22 tablet:text-20 sm-mobile:text-18 text-16 font-semibold text-text-secondary xxl-desktop:pb-[40px] xl-desktop:pb-[32px] tablet:pb-[26px] sm-mobile:pb-[20px] pb-[12px] block">
              Revenue
            </span>
            <MultiLinechart />
          </div>
          <div className="w-full grid laptop:grid-cols-2 grid-cols-1 xl-desktop:gap-6 gap-4">
            <div
              className={`bg-white-background xxl-desktop:p-[35px_35px_58px] xl-desktop:p-[30px_30px_48px] tablet:p-[24px_24px_40px] sm-mobile:p-[18px_18px_30px] p-[18px_12px_18px] rounded-[14px] ${
                isDark
                  ? "border border-border-fill shadow-none"
                  : "shadow-custom"
              }`}
            >
              <span className="xxl-desktop:text-24 xl-desktop:text-22 tablet:text-20 sm-mobile:text-18 text-16 font-semibold text-text-secondary xxl-desktop:pb-[40px] xl-desktop:pb-[32px] tablet:pb-[26px] sm-mobile:pb-[20px] pb-[12px] block">
                Customer
              </span>
              <DoughnutChart />
            </div>
            <div
              className={`bg-white-background xxl-desktop:p-[35px_35px_58px] xl-desktop:p-[30px_30px_48px] tablet:p-[24px_24px_40px] sm-mobile:p-[18px_18px_30px] p-[18px_12px_18px] rounded-[14px] ${
                isDark
                  ? "border border-border-fill shadow-none"
                  : "shadow-custom"
              }`}
            >
              <span className="xxl-desktop:text-24 xl-desktop:text-22 tablet:text-20 sm-mobile:text-18 text-16 font-semibold text-text-secondary xxl-desktop:pb-[40px] xl-desktop:pb-[32px] tablet:pb-[26px] sm-mobile:pb-[20px] pb-[12px] block">
                Top Sellers Products
              </span>
              <PieChart />
            </div>
          </div>
          <div className="w-full grid laptop:grid-cols-2 grid-cols-1 xl-desktop:gap-6 gap-4">
            <div
              className={`bg-white-background xxl-desktop:p-[35px_35px_58px] xl-desktop:p-[30px_30px_48px] tablet:p-[24px_24px_40px] sm-mobile:p-[18px_18px_30px] p-[18px_12px_18px] rounded-[14px] ${
                isDark
                  ? "border border-border-fill shadow-none"
                  : "shadow-custom"
              }`}
            >
              <span className="xxl-desktop:text-24 xl-desktop:text-22 tablet:text-20 sm-mobile:text-18 text-16 font-semibold text-text-secondary xxl-desktop:pb-[40px] xl-desktop:pb-[32px] tablet:pb-[26px] sm-mobile:pb-[20px] pb-[12px] block">
                Sales Analytics
              </span>
              <SalesAnalyticsLineChart />
            </div>
            <div
              className={`bg-white-background xxl-desktop:p-[35px_35px_58px] xl-desktop:p-[30px_30px_48px] tablet:p-[24px_24px_40px] sm-mobile:p-[18px_18px_30px] p-[18px_12px_18px] rounded-[14px] ${
                isDark
                  ? "border border-border-fill shadow-none"
                  : "shadow-custom"
              }`}
            >
              <span className="xxl-desktop:text-24 xl-desktop:text-22 tablet:text-20 sm-mobile:text-18 text-16 font-semibold text-text-secondary xxl-desktop:pb-[40px] xl-desktop:pb-[32px] tablet:pb-[26px] sm-mobile:pb-[20px] pb-[12px] block">
                Top Smartphone Brands by Market Share
              </span>
              <BarChart />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
