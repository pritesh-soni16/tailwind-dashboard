import React, { FC } from "react";
import { Form, Input } from "../core";
import {
  Account,
  ActivityLog,
  Calender,
  ChangePassword,
  Error,
  Notification,
  Profile,
  Search,
  Setting,
  Signout,
} from "@/assets/icons";
import Image from "next/image";

import Profile_img from "@/assets/images/profile-img.png";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useTheme } from "@/context/theme-context";
import Logo from "@/assets/images/CollapsedLogo.svg";
import { useCustomeBreakpoints } from "@/hooks";
import Link from "next/link";

interface topbarProps {
  onToggleSidebar?: () => void;
}

export const Topbar: FC<topbarProps> = ({ onToggleSidebar }) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const { isLessThan1199 } = useCustomeBreakpoints({});

  return (
    <div className="xl-desktop:py-4 sm-mobile:py-3 py-2 sm-mobile:px-[20px] px-[12px] xl-desktop:px-[24px] xxl-desktop:px-[30px] bg-white-background border-b-1 border-solid border-border-fill">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center m-laptop:gap-6 gap-4">
          {isLessThan1199 && (
            <Link href={"/"}>
              <Image
                alt="logo"
                src={Logo}
                width={55}
                height={50}
                className="sm-mobile:max-w-[55px] max-w-[45px]"
              />
            </Link>
          )}
          <button
            onClick={onToggleSidebar}
            className="flex flex-col p-[3px] items-center justify-center gap-1 w-[24px] h-[24px] cursor-pointer"
          >
            <span className="w-full block h-[2px] bg-black-background"></span>
            <span className="w-full block h-[2px] bg-black-background"></span>
            <span className="w-full block h-[2px] bg-black-background"></span>
          </button>
          <div className="xl-desktop:min-w-[380px] m-laptop:min-w-[300px] relative laptop:block hidden">
            <Search
              width={18}
              height={18}
              className={`absolute top-0 bottom-0 m-auto left-[16px] stroke-input-text`}
            />
            <Input
              type="text"
              name="search"
              formClass="xl-desktop:!p-[12px_16px_12px_45px] !p-[8px_16px_8px_45px] !rounded-full w-full"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center laptop:gap-4 gap-3">
          {isLessThan1199 ? (
            <button
              onClick={toggleTheme}
              className={`py-1 px-1 cursor-pointer rounded-full transition duration-400 ease-in-out border-1 border-solid border-border-fill relative ${
                isDark ? "bg-[#323D4E]" : "bg-white"
              }`}
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <SunIcon className={`w-5 text-yellow-400 `} />
              ) : (
                <MoonIcon className={`w-5  text-black`} />
              )}
            </button>
          ) : (
            <button
              onClick={toggleTheme}
              className={`py-1 px-2 cursor-pointer rounded-full transition duration-400 ease-in-out border-1 border-solid border-border-fill xl-desktop:w-[75px] xl-desktop:h-[35px] w-[65px] h-[30px] relative ${
                isDark ? "bg-[#323D4E]" : "bg-white"
              }`}
              aria-label="Toggle Theme"
            >
              <SunIcon
                className={`xl-desktop:w-6 w-5 absolute top-0 bottom-0 left-2 m-auto text-yellow-400 transition duration-400 ease-in-out ${
                  isDark ? "opacity-0" : "opacity-100"
                }`}
              />
              <MoonIcon
                className={`xl-desktop:w-6 w-5 absolute top-0 bottom-0 right-2 m-auto text-white transition duration-400 ease-in-out ${
                  isDark ? "opacity-100" : "opacity-0"
                }`}
              />
              <span
                className={`xl-desktop:size-[22px] size-[18px] absolute top-0 bottom-0 m-auto rounded-full border-[3px] transition-all duration-400 ease-in-out ${
                  isDark
                    ? "left-2 bg-gray-500 border-white "
                    : "right-2 border-yellow-400 bg-yellow-100"
                }`}
              ></span>
            </button>
          )}
          <div className="relative laptop:hidden block cursor-pointer">
            <Search width={23} height={23} className={`stroke-input-text`} />
          </div>
          <span className="w-[2px] block h-[-webkit-fill-available] border-l-[2px] border-solid border-border-fill mx-0"></span>
          <Menu as="div" className="relative">
            <>
              <MenuButton className="flex focus-visible:outline-0 cursor-pointer ">
                <div className="relative">
                  <span className="m-laptop:size-[18px] size-[14px] absolute top-[-5px] right-0 text-12 bg-red flex items-center justify-center rounded-full text-white font-regular">
                    6
                  </span>
                  <Notification
                    width={32}
                    height={32}
                    fill="#4880FF"
                    className="m-laptop:max-w-[32px] m-laptop:max-h-[32px] max-w-[25px] max-h-[25px]"
                  />
                </div>
              </MenuButton>
              <MenuItems
                transition
                className={`absolute right-0 z-10 mt-2 xl-desktop:w-[270px] laptop:w-[250px] w-[230px] origin-top-right rounded-[14px] bg-white-background transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in ${
                  isDark
                    ? "border border-border-fill shadow-none"
                    : "shadow-[0_9px_40px_0_rgba(0,0,0,0.10)]"
                }`}
              >
                <div>
                  <div className="xl-desktop:p-[13px_20px] laptop:p-[11px_16px] p-[9px_14px] border-b-1 border-solid border-border-fill">
                    <span className="laptop:text-14 text-12 font-medium text-text-404040">
                      Notification
                    </span>
                  </div>
                  <MenuItem>
                    <Link
                      href="#"
                      className={`xl-desktop:p-[12px_20px] laptop:p-[10px_16px] p-[8px_14px] data-focus:bg-input-bg data-focus:outline-hidden flex items-center xl-desktop:gap-3 gap-2`}
                    >
                      <span className="xl-desktop:size-[36px] size-[32px] bg-linear-to-t from-[#80C9FC] to-[#4E96FF] rounded-full flex justify-center items-center">
                        <Setting width={20} height={20} fill="#fff" />
                      </span>
                      <div className="flex flex-col laptop:gap-[1px]">
                        <span className="laptop:text-14 text-12 font-medium text-text-secondary">
                          Settings
                        </span>
                        <span className="laptop:text-12 text-[11px] font-medium text-text-gray">
                          Update Dashboard
                        </span>
                      </div>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      href="#"
                      className={`xl-desktop:p-[12px_20px] laptop:p-[10px_16px] p-[8px_14px] data-focus:bg-input-bg data-focus:outline-hidden flex items-center xl-desktop:gap-3 gap-2`}
                    >
                      <span className="xl-desktop:size-[36px] size-[32px] bg-linear-to-t from-[#FFC1E6] to-[#F97FD9] rounded-full flex justify-center items-center">
                        <Calender width={20} height={20} fill="#fff" />
                      </span>
                      <div className="flex flex-col laptop:gap-[1px]">
                        <span className="laptop:text-14 text-12 font-medium text-text-secondary">
                          Event Update
                        </span>
                        <span className="laptop:text-12 text-[11px] font-medium text-text-gray">
                          An event date update again
                        </span>
                      </div>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      href="#"
                      className={`xl-desktop:p-[12px_20px] laptop:p-[10px_16px] p-[8px_14px] data-focus:bg-input-bg data-focus:outline-hidden flex items-center xl-desktop:gap-3 gap-2`}
                    >
                      <span className="xl-desktop:size-[36px] size-[32px] bg-linear-to-t from-[#EBCBFF] to-[#9E8FFF] rounded-full flex justify-center items-center">
                        <Profile width={20} height={20} fill="#fff" />
                      </span>
                      <div className="flex flex-col laptop:gap-[1px]">
                        <span className="laptop:text-14 text-12 font-medium text-text-secondary">
                          Profile
                        </span>
                        <span className="laptop:text-12 text-[11px] font-medium text-text-gray">
                          Update your profile
                        </span>
                      </div>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      href="#"
                      className={`xl-desktop:p-[12px_20px] laptop:p-[10px_16px] p-[8px_14px] data-focus:bg-input-bg data-focus:outline-hidden flex items-center xl-desktop:gap-3 gap-2`}
                    >
                      <span className="xl-desktop:size-[36px] size-[32px] bg-linear-to-t from-[#FFC1C1] to-[#FF8F8F] rounded-full flex justify-center items-center">
                        <Error width={20} height={20} fill="#fff" />
                      </span>
                      <div className="flex flex-col laptop:gap-[1px]">
                        <span className="laptop:text-14 text-12 font-medium text-text-secondary">
                          Application Error
                        </span>
                        <span className="laptop:text-12 text-[11px] font-medium text-text-gray">
                          Check Your rung application
                        </span>
                      </div>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      href="#"
                      className={`xl-desktop:p-[13px_20px] laptop:p-[11px_16px] p-[9px_14px] data-focus:outline-hidden flex justify-center border-t border-border-fill laptop:text-14 text-12 font-medium text-text-gray`}
                    >
                      See all notification
                    </Link>
                  </MenuItem>
                </div>
              </MenuItems>
            </>
          </Menu>

          <Menu as="div" className="relative inline-block">
            {({ open }) => (
              <>
                <MenuButton className="flex items-center w-full justify-center gap-3 focus-visible:outline-0 cursor-pointer ">
                  <div className="flex items-center gap-3">
                    <span className="xl-desktop:w-[44px] xl-desktop:h-[44px] sm-mobile:w-[38px] sm-mobile:h-[38px] w-[34px] h-[34px] rounded-full overflow-hidden inline-block bg-[#D8D8D8]">
                      <Image
                        alt="DB - profile-img"
                        width={44}
                        height={44}
                        src={Profile_img}
                        className="w-full h-full object-cover"
                      />
                    </span>
                    <div className="m-laptop:flex hidden flex-col items-start">
                      <span className="xl-desktop:text-14 text-12 font-bold text-text-404040">
                        Moni Roy
                      </span>
                      <span className="xl-desktop:text-12 text-[10px] font-semibold text-text-565656">
                        Admin
                      </span>
                    </div>
                  </div>
                  <div className="m-laptop:w-[22px] m-laptop:h-[22px] w-[18px] h-[18px] rounded-full border-1 border-solid border-secondary-5c5c5c m-laptop:flex hidden items-center justify-center">
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={` size-5 text-text-565656 transition-transform duration-400 ${
                        open ? "-rotate-180" : ""
                      }`}
                    />
                  </div>
                </MenuButton>

                <MenuItems
                  transition
                  className={`absolute right-0 z-10 mt-2 xl-desktop:w-52 w-46 origin-top-right rounded-[14px] bg-white-background transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in ${
                    isDark
                      ? "border border-border-fill shadow-none"
                      : "shadow-[0_9px_40px_0_rgba(0,0,0,0.10)]"
                  }`}
                >
                  <div>
                    <MenuItem>
                      <Link
                        href="#"
                        className={`px-[20px] py-[11px] data-focus:bg-input-bg data-focus:outline-hidden flex items-center gap-3 rounded-t-[14px] xl-desktop:text-14 text-12 font-medium text-text-404040 border-b-1 border-solid border-border-fill`}
                      >
                        <Account width={20} height={20} />
                        Manage Account
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        href="#"
                        className="px-[20px] py-[11px] data-focus:bg-input-bg data-focus:outline-hidden flex items-center gap-3 xl-desktop:text-14 text-12 font-medium text-text-404040 border-b-1 border-solid border-border-fill"
                      >
                        <ChangePassword width={20} height={20} />
                        Change Password
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        href="#"
                        className="px-[20px] py-[11px] data-focus:bg-input-bg data-focus:outline-hidden flex items-center gap-3 xl-desktop:text-14 text-12 font-medium text-text-404040 border-b-1 border-solid border-border-fill"
                      >
                        <ActivityLog width={20} height={20} />
                        Activity Log
                      </Link>
                    </MenuItem>
                    <Form onSubmit={handleSubmit} className="">
                      <MenuItem>
                        <button
                          type="submit"
                          className="px-[20px] py-[11px] data-focus:bg-input-bg data-focus:outline-hidden flex items-center gap-3 xl-desktop:text-14 text-12 font-medium rounded-b-[14px] text-text-404040 w-full cursor-pointer"
                        >
                          <Signout width={20} height={20} />
                          Sign out
                        </button>
                      </MenuItem>
                    </Form>
                  </div>
                </MenuItems>
              </>
            )}
          </Menu>
        </div>
      </div>
    </div>
  );
};
