"use client";

import { Order, Pending, Sales, StatusArrow, User } from "@/assets/icons";
import React, { FC, SVGProps } from "react";
import "chart.js/auto";
import { Linechart } from "@/components/AllChart/Linechart/Linechart";
import { CustomeProductTable } from "../AllTable";
import { useTheme } from "@/context/theme-context";

interface DashboardCardType {
  title?: string;
  value?: string;
  iconBG?: string;
  Icon?: FC<SVGProps<SVGSVGElement>>;
  iconClass?: string;
  statsArrowClass?: string;
  arrowRotate?: string;
  percentColor?: string;
  statusPercent?: string;
  Status?: string;
}

export const Dashboard: FC<DashboardCardType> = () => {
  const statsData = [
    {
      title: "Total User",
      value: "40,689",
      iconBG: "bg-purple-card-shade",
      Icon: User,
      iconClass: "fill-purple-card",
      statsArrowClass: "fill-green",
      arrowRotate: 0,
      percentColor: "text-green",
      statusPercent: "8.5%",
      Status: "Up from yesterday",
    },
    {
      title: "Total Order",
      value: "10293",
      iconBG: "bg-yellow-card-shade",
      Icon: Order,
      iconClass: "fill-yellow-card",
      statsArrowClass: "fill-green",
      arrowRotate: 0,
      percentColor: "text-green",
      statusPercent: "1.3%",
      Status: "Up from past week",
    },
    {
      title: "Total Sales",
      value: "$89,000",
      iconBG: "bg-green-card-shade",
      Icon: Sales,
      iconClass: "fill-green-card",
      statsArrowClass: "fill-red",
      arrowRotate: 180,
      percentColor: "text-red",
      statusPercent: "4.3%",
      Status: "Down from yesterday",
    },
    {
      title: "Total Pending",
      value: "2040",
      iconBG: "bg-orange-card-shade",
      Icon: Pending,
      iconClass: "fill-orange-card",
      statsArrowClass: "fill-green",
      arrowRotate: 0,
      percentColor: "text-green",
      statusPercent: "1.8%",
      Status: "Up from yesterday",
    },
  ];

  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <section>
        <div className="flex flex-col xl-desktop:gap-8 sm-mobile:gap-6 gap-4">
          <span className="xxl-desktop:text-32 xl-desktop:text-30/[35px] sm-mobile:text-24/[32px] text-20/[26px] font-semibold text-text-secondary">
            Dashboard
          </span>
          <div className="grid laptop:grid-cols-4 sm-mobile:grid-cols-2 grid-cols-1 xxl-desktop:gap-7 xl-desktop:gap-6 sm-mobile:gap-5 gap-4">
            {statsData.map((statusCard, index) => (
              <div
                key={index}
                className={`statsCard ${
                  isDark ? "border border-border-fill shadow-none" : ""
                }`}
              >
                <div className="sc-top">
                  <div className="sc-content-wrapper">
                    <span className="sc-title">{statusCard.title}</span>
                    <span className="sc-value">{statusCard.value}</span>
                  </div>
                  <div className={`${statusCard.iconBG} sc-icon-wrapper`}>
                    <statusCard.Icon
                      width={38}
                      height={35}
                      className={`${statusCard.iconClass} max-w-[28px] xl-desktop:max-w-[32px] xxl-desktop:max-w-[38px]`}
                    />
                  </div>
                </div>
                <div className="sc-bottom">
                  <StatusArrow
                    width={24}
                    height={24}
                    className={`${statusCard.statsArrowClass} xxl-desktop:max-w-[24px] xxl-desktop:max-h-[24px] max-w-[20px] max-h-[20px]`}
                    rotate={statusCard.arrowRotate}
                  />
                  <span className={`sc-bottom-content flex items-center gap-1`}>
                    <span className={statusCard.percentColor}>
                      {statusCard.statusPercent}
                    </span>
                    {statusCard.Status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div
            className={`bg-white-background xxl-desktop:p-[35px_35px_58px] xl-desktop:p-[30px_30px_48px] tablet:p-[24px_24px_40px] sm-mobile:p-[18px_18px_30px] p-[18px_12px_18px] rounded-[14px] ${
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
              Deals Details
            </span>
            <CustomeProductTable />
          </div>
        </div>
      </section>
    </>
  );
};
