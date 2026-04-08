"use client";

import { FC, Fragment, ReactNode, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { usePathname } from "next/navigation";

export interface AppProps {
  children: ReactNode;
}
export const App: FC<AppProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const pathname = usePathname();

  const isDashboard = pathname === "/";
  const ProtectedRoute = ["/all-table", "/all-chart"];

  const isProtectedRoute =
    isDashboard || ProtectedRoute.some((route) => pathname.startsWith(route));

  return (
    <Fragment>
      {isProtectedRoute ? (
        <div className="flex h-screen overflow-hidden">
          <aside
            className={` transition-all duration-400 ease-in-out m-laptop:relative fixed z-50 m-laptop:z-0 ${
              collapsed
                ? "m-laptop:w-[80px] w-[280px] right-0"
                : "w-[280px] right-[-280px] m-laptop:right-[unset] m-laptop:w-[200px] xl-desktop:w-[260px] xxl-desktop:w-[300px]"
            } `}
          >
            <Sidebar
              collapsed={collapsed}
              onLinkClick={() => setCollapsed(false)}
            />
          </aside>
          {collapsed && (
            <div
              className="fixed inset-0 bg-black/20 z-40 h-screen m-laptop:opacity-0 m-laptop:hidden block opacity-100 transition-all duration-300 ease-in-out"
              onClick={() => setCollapsed(false)}
            ></div>
          )}
          <main
            className={`transition-all duration-400 ease-in-out h-screen  ${
              collapsed
                ? "m-laptop:w-[calc(100%-80px)] w-full"
                : "w-full m-laptop:w-[calc(100%-200px)] xl-desktop:w-[calc(100%-260px)] xxl-desktop:w-[calc(100%-300px)]"
            }`}
          >
            <Topbar onToggleSidebar={toggleSidebar} />
            <div className="sm-mobile:p-[20px] p-[20px_12px] xl-desktop:p-[24px] xxl-desktop:p-[30px] xl-desktop:h-[calc(100%-83px)] sm-mobile:h-[calc(100%-67px)] h-[calc(100%-51px)] overflow-y-auto overflow-x-hidden common-scrollbar bg-body">
              {children}
            </div>
          </main>
        </div>
      ) : (
        <>{children}</>
      )}
    </Fragment>
  );
};
