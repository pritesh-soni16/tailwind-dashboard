"use client";

import Image from "next/image";
import React, { FC } from "react";
import CollapsedLogo from "@/assets/images/CollapsedLogo.svg";
import logo from "@/assets/images/logo.svg";
import darklogo from "@/assets/images/DarkLogo.svg";
import Link from "next/link";
import { Chart, Dashboard, Logout, Table } from "@/assets/icons";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/theme-context";

interface siderbarProps {
  collapsed?: boolean;
  onLinkClick?: () => void;
}

export const Sidebar: FC<siderbarProps> = ({ collapsed, onLinkClick }) => {
  const pathname = usePathname();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const LogoSrc = isDark
    ? collapsed
      ? CollapsedLogo
      : darklogo
    : collapsed
    ? CollapsedLogo
    : logo;

  const MobileLogo = isDark ? darklogo : logo;

  return (
    <>
      <div
        className={`bg-white-background h-screen overflow-hidden m-laptop:flex hidden flex-col items-start border-r-1 border-solid border-border-fill`}
      >
        <div className="w-full flex justify-center px-[12px] xl-desktop:py-4 py-3 border-b-0 border-solid border-border-fill">
          <Link
            href={"/"}
            className={`w-full flex ${
              collapsed ? "justify-start" : "justify-center"
            }`}
          >
            <Image
              alt="Logo"
              src={LogoSrc}
              width={collapsed ? 55 : 275}
              height={48}
              className={`xl-desktop:h-[50px] h-[42px] transition-all duration-500 ease-in-out ${
                collapsed
                  ? "max-w-[55px]"
                  : "xl-desktop:max-w-[220px] xl-desktop:min-w-[220px] xxl-desktop:max-w-[275px] xxl-desktop:min-w-[275px]"
              }`}
            />
          </Link>
        </div>
        <div
          className={`w-full h-full overflow-y-auto common-scrollbar position-relative transition-all duration-400 ease-in-out ${
            collapsed
              ? "py-5 px-3"
              : "py-5 m-laptop:px-3 xl-desktop:px-4 xxl-desktop:px-5"
          }`}
        >
          <ul className="xl-desktop:space-y-3 m-laptop:space-y-2 flex flex-col">
            <li>
              <Link
                href={"/"}
                className={`group flex items-center gap-2 rounded-[6px] hover:bg-primary transition-all duration-400 ease-in-out ${
                  pathname === "/" ? "bg-primary" : "bg-transparent"
                } ${
                  collapsed
                    ? "p-[12px_15px]"
                    : "xl-desktop:p-[16px_12px] m-laptop:p-[12px_10px]"
                }`}
              >
                <Dashboard
                  width={24}
                  height={24}
                  className={`${
                    pathname === "/" ? "fill-white" : "fill-text-secondary"
                  }  flex-none group-hover:fill-white transition-all duration-400 ease-in-out`}
                />
                {!collapsed && (
                  <span
                    className={`xl-desktop:text-16 m-laptop:text-14 font-medium group-hover:text-white transition-all duration-400 ease-in-out whitespace-nowrap ${
                      pathname === "/" ? "text-white" : "text-text-secondary"
                    }`}
                  >
                    DashBoard
                  </span>
                )}
              </Link>
            </li>
            <li>
              <Link
                href={"/all-table"}
                className={`group flex items-center gap-2 rounded-[6px] ${
                  pathname === "/all-table" ? "bg-primary" : "bg-transparent"
                } hover:bg-primary transition-all duration-400 ease-in-out ${
                  collapsed
                    ? "p-[12px_15px]"
                    : "xl-desktop:p-[16px_12px] m-laptop:p-[12px_10px]"
                }`}
              >
                <Table
                  width={24}
                  height={24}
                  className={`${
                    pathname === "/all-table"
                      ? "fill-white"
                      : "fill-text-secondary"
                  }  flex-none group-hover:fill-white transition-all duration-400 ease-in-out`}
                />
                {!collapsed && (
                  <span
                    className={`xl-desktop:text-16 m-laptop:text-14 font-medium group-hover:text-white transition-all duration-400 ease-in-out whitespace-nowrap ${
                      pathname === "/all-table"
                        ? "text-white"
                        : "text-text-secondary"
                    }`}
                  >
                    All Tables
                  </span>
                )}
              </Link>
            </li>
            <li>
              <Link
                href={"/all-chart"}
                className={`group flex items-center gap-2 rounded-[6px] ${
                  pathname === "/all-chart" ? "bg-primary" : "bg-transparent"
                } hover:bg-primary transition-all duration-400 ease-in-out ${
                  collapsed
                    ? "p-[12px_15px]"
                    : "xl-desktop:p-[16px_12px] m-laptop:p-[12px_10px]"
                }`}
              >
                <Chart
                  width={24}
                  height={24}
                  className={`${
                    pathname === "/all-chart"
                      ? "fill-white"
                      : "fill-text-secondary"
                  }  flex-none group-hover:fill-white transition-all duration-400 ease-in-out`}
                />
                {!collapsed && (
                  <span
                    className={`xl-desktop:text-16 m-laptop:text-14 font-medium group-hover:text-white transition-all duration-400 ease-in-out whitespace-nowrap ${
                      pathname === "/all-chart"
                        ? "text-white"
                        : "text-text-secondary"
                    }`}
                  >
                    All Chart
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <Link
            href={"/"}
            className={`group flex items-center gap-2  bg-primary hover:bg-secondary transition-all duration-600 ease-in-out ${
              collapsed ? "p-[16px_27px]" : "p-[16px_32px]"
            }`}
          >
            <Logout
              width={24}
              height={24}
              className="stroke-white transition-all duration-600 ease-in-out flex-none"
            />
            {!collapsed && (
              <span className="text-white xl-desktop:text-16 m-laptop:text-14 font-semibold transition-all duration-600 ease-in-out whitespace-nowrap">
                LogOut
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* MOBILE RESPONSIVE SIDEBAR */}

      <div
        className={`bg-white-background h-screen overflow-hidden m-laptop:hidden flex flex-col items-start border-r-1 border-solid border-border-fill`}
      >
        <div className="w-full flex justify-center p-4 border-b-0 border-solid border-border-fill bg-white-background">
          <Link href={"/"} className={`w-full flex justify-center`}>
            <Image
              alt="Logo"
              src={MobileLogo}
              width={240}
              height={48}
              className={`h-[50px] max-w-[240px] min-w-[240px]`}
            />
          </Link>
        </div>
        <div
          className={`w-full h-full overflow-y-auto common-scrollbar position-relative transition-all duration-400 ease-in-out p-4`}
        >
          <ul className="space-y-2 flex flex-col">
            <li>
              <Link
                href={"/"}
                onClick={() => onLinkClick?.()}
                className={`group flex items-center gap-2 rounded-[6px] hover:bg-primary transition-all duration-400 ease-in-out p-[12px_15px] ${
                  pathname === "/" ? "bg-primary" : "bg-transparent"
                } `}
              >
                <Dashboard
                  width={24}
                  height={24}
                  className={`${
                    pathname === "/" ? "fill-white" : "fill-text-secondary"
                  }  flex-none group-hover:fill-white transition-all duration-400 ease-in-out max-w-[20px] max-h-[20px]`}
                />
                <span
                  className={`text-14 font-medium group-hover:text-white transition-all duration-400 ease-in-out whitespace-nowrap ${
                    pathname === "/" ? "text-white" : "text-text-secondary"
                  }`}
                >
                  DashBoard
                </span>
              </Link>
            </li>
            <li>
              <Link
                href={"/all-table"}
                onClick={() => onLinkClick?.()}
                className={`group flex items-center gap-2 rounded-[6px] p-[12px_15px] ${
                  pathname === "/all-table" ? "bg-primary" : "bg-transparent"
                } hover:bg-primary transition-all duration-400 ease-in-out `}
              >
                <Table
                  width={24}
                  height={24}
                  className={`${
                    pathname === "/all-table"
                      ? "fill-white"
                      : "fill-text-secondary"
                  }  flex-none group-hover:fill-white transition-all duration-400 ease-in-out max-w-[20px] max-h-[20px]`}
                />
                <span
                  className={`text-14 font-medium group-hover:text-white transition-all duration-400 ease-in-out whitespace-nowrap ${
                    pathname === "/all-table"
                      ? "text-white"
                      : "text-text-secondary"
                  }`}
                >
                  All Tables
                </span>
              </Link>
            </li>
            <li>
              <Link
                href={"/all-chart"}
                onClick={() => onLinkClick?.()}
                className={`group flex items-center gap-2 rounded-[6px] p-[12px_15px] ${
                  pathname === "/all-chart" ? "bg-primary" : "bg-transparent"
                } hover:bg-primary transition-all duration-400 ease-in-out`}
              >
                <Chart
                  width={24}
                  height={24}
                  className={`${
                    pathname === "/all-chart"
                      ? "fill-white"
                      : "fill-text-secondary"
                  }  flex-none group-hover:fill-white transition-all duration-400 ease-in-out max-w-[20px] max-h-[20px]`}
                />
                <span
                  className={`text-14 font-medium group-hover:text-white transition-all duration-400 ease-in-out whitespace-nowrap ${
                    pathname === "/all-chart"
                      ? "text-white"
                      : "text-text-secondary"
                  }`}
                >
                  All Chart
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <Link
            href={"/"}
            className={`group flex items-center gap-2  bg-primary hover:bg-secondary transition-all duration-600 ease-in-out p-[12px_15px]`}
          >
            <Logout
              width={24}
              height={24}
              className="stroke-white transition-all duration-600 ease-in-out flex-none max-w-[20px] max-h-[20px]"
            />
            <span className="text-white text-14 font-semibold transition-all duration-600 ease-in-out whitespace-nowrap">
              LogOut
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};
