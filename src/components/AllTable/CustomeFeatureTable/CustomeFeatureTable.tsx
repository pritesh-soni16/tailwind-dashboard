"use client";

import { Chevron, Search } from "@/assets/icons";
import { Pagination } from "@/components/Common";
import AutoResizeTextarea from "@/components/Common/Textarea/AutoResizeTextarea";
import { Input } from "@/components/core";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React, { FC, useEffect, useRef, useState } from "react";

interface TableTitleType {
  key: keyof TableRowType;
  lable: string;
  width?: string;
}

interface TableRowType {
  id: string;
  name: string;
  address: string;
  date: string;
  type: string;
  status: string;
}

interface CustomeFeatureTableProps {}

export const CustomeFeatureTable: FC<CustomeFeatureTableProps> = () => {
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const tableTitle: TableTitleType[] = [
    {
      key: "id",
      lable: "ID",
      width: "xl-desktop:w-[90px] sm-mobile:w-[70px] w-[50px]",
    },
    { key: "name", lable: "Name" },
    { key: "address", lable: "Address" },
    { key: "date", lable: "Date", width: "xl-desktop:w-[150px] w-[120px]" },
    {
      key: "type",
      lable: "Type",
      width: "xl-desktop:w-[150px] sm-mobile:w-[120px] w-[100px]",
    },
    {
      key: "status",
      lable: "Status",
      width: "xl-desktop:w-[170px] sm-mobile:w-[140px] w-[120px]",
    },
  ];

  const tableData: TableRowType[] = [
    {
      id: "001",
      name: "Christine Brooks",
      address: "089 Kutch Green Apt. 448",
      date: "14 Feb 2019",
      type: "Electric",
      status: "Completed",
    },
    {
      id: "002",
      name: "Rosie Pearson",
      address: "979 Immanuel Ferry Suite 526",
      date: "14 Feb 2019",
      type: "Book",
      status: "Processing",
    },
    {
      id: "003",
      name: "Darrell Caldwell",
      address: "8587 Frida Ports",
      date: "14 Feb 2019",
      type: "Medicine",
      status: "Rejected",
    },
    {
      id: "004",
      name: "Gilbert Johnston",
      address: "768 Destiny Lake Suite 600",
      date: "14 Feb 2019",
      type: "Mobile",
      status: "Completed",
    },
    {
      id: "005",
      name: "Alan Cain",
      address: "042 Mylene Throughway",
      date: "14 Feb 2019",
      type: "Watch",
      status: "Processing",
    },
    {
      id: "006",
      name: "Alfred Murray",
      address: "543 Weimann Mountain",
      date: "14 Feb 2019",
      type: "Medicine",
      status: "Completed",
    },
    {
      id: "007",
      name: "Alfred Murray",
      address: "543 Weimann Mountain",
      date: "14 Feb 2019",
      type: "Medicine",
      status: "Completed",
    },
    {
      id: "008",
      name: "Alfred Murray",
      address: "543 Weimann Mountain",
      date: "14 Feb 2019",
      type: "Medicine",
      status: "Completed",
    },
    {
      id: "009",
      name: "Alfred Murray",
      address: "543 Weimann Mountain",
      date: "14 Feb 2019",
      type: "Medicine",
      status: "Completed",
    },
    {
      id: "010",
      name: "Alfred Murray",
      address: "543 Weimann Mountain",
      date: "14 Feb 2019",
      type: "Medicine",
      status: "Completed",
    },
    {
      id: "011",
      name: "Alfred Murray",
      address: "543 Weimann Mountain",
      date: "14 Feb 2019",
      type: "Medicine",
      status: "Completed",
    },
    {
      id: "012",
      name: "Alfred Murray",
      address: "543 Weimann Mountain",
      date: "14 Feb 2019",
      type: "Medicine",
      status: "Completed",
    },
    {
      id: "013",
      name: "Alfred Murray",
      address: "543 Weimann Mountain",
      date: "14 Feb 2019",
      type: "Medicine",
      status: "Completed",
    },
    {
      id: "014",
      name: "Alfred Murray",
      address: "543 Weimann Mountain",
      date: "14 Feb 2019",
      type: "Medicine",
      status: "Completed",
    },
    {
      id: "015",
      name: "Alfred Murray",
      address: "543 Weimann Mountain",
      date: "14 Feb 2019",
      type: "Medicine",
      status: "Completed",
    },
    {
      id: "001",
      name: "Christine Brooks",
      address: "089 Kutch Green Apt. 448",
      date: "14 Feb 2019",
      type: "Electric",
      status: "Completed",
    },
    {
      id: "002",
      name: "Rosie Pearson",
      address: "979 Immanuel Ferry Suite 526",
      date: "14 Feb 2019",
      type: "Book",
      status: "Processing",
    },
    {
      id: "003",
      name: "Darrell Caldwell",
      address: "8587 Frida Ports",
      date: "14 Feb 2019",
      type: "Medicine",
      status: "Rejected",
    },
    {
      id: "004",
      name: "Gilbert Johnston",
      address: "768 Destiny Lake Suite 600",
      date: "14 Feb 2019",
      type: "Mobile",
      status: "Completed",
    },
    {
      id: "005",
      name: "Alan Cain",
      address: "042 Mylene Throughway",
      date: "14 Feb 2019",
      type: "Watch",
      status: "Processing",
    },
    {
      id: "006",
      name: "Alfred Murray",
      address: "543 Weimann Mountain",
      date: "14 Feb 2019",
      type: "Medicine",
      status: "Completed",
    },
    {
      id: "007",
      name: "Alfred Murray",
      address: "543 Weimann Mountain",
      date: "14 Feb 2019",
      type: "Medicine",
      status: "Completed",
    },
    {
      id: "008",
      name: "Alfred Murray",
      address: "543 Weimann Mountain",
      date: "14 Feb 2019",
      type: "Medicine",
      status: "Completed",
    },
    {
      id: "009",
      name: "Alfred Murray",
      address: "543 Weimann Mountain",
      date: "14 Feb 2019",
      type: "Medicine",
      status: "Completed",
    },
    {
      id: "010",
      name: "Alfred Murray",
      address: "543 Weimann Mountain",
      date: "14 Feb 2019",
      type: "Medicine",
      status: "Completed",
    },
    {
      id: "011",
      name: "Alfred Murray",
      address: "543 Weimann Mountain",
      date: "14 Feb 2019",
      type: "Medicine",
      status: "Completed",
    },
    {
      id: "012",
      name: "Alfred Murray",
      address: "543 Weimann Mountain",
      date: "14 Feb 2019",
      type: "Medicine",
      status: "Completed",
    },
    {
      id: "013",
      name: "Alfred Murray",
      address: "543 Weimann Mountain",
      date: "14 Feb 2019",
      type: "Medicine",
      status: "Completed",
    },
    {
      id: "014",
      name: "Alfred Murray",
      address: "543 Weimann Mountain",
      date: "14 Feb 2019",
      type: "Medicine",
      status: "Completed",
    },
    {
      id: "015",
      name: "Alfred Murray",
      address: "543 Weimann Mountain",
      date: "14 Feb 2019",
      type: "Medicine",
      status: "Completed",
    },
  ];

  const statusClass: Record<string, string> = {
    completed: "bg-green-card-shade text-green-card",
    processing: "bg-purple-card-shade text-purple-card",
    rejected: "bg-red-card-shade text-red-card",
  };

  const filterStatus =
    selectedStatus === "All Status"
      ? tableData
      : tableData.filter((row) => row.status === selectedStatus);

  // Calculate data for current page
  // const totalPages = Math.ceil(filterStatus.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filterStatus.slice(indexOfFirstRow, indexOfLastRow);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (status: string) => {
    setSelectedStatus(status);
    setCurrentPage(1);
  };

  return (
    <>
      <div>
        <div className="sm-mobile:p-[12px_25px] p-[10px_18px] bg-white-background rounded-[14px] sm-mobile:mb-4 mb-2 flex justify-between">
          <div className="relative laptop:max-w-[275px] sm-mobile:max-w-[240px] max-w-[170px]">
            <Search
              width={18}
              height={18}
              className={`absolute top-0 bottom-0 m-auto left-[10px] stroke-input-text`}
            />
            <Input
              name="searchtable"
              placeholder="search here..."
              formClass="!p-[6px_10px_6px_35px] !rounded-[10px] h-full w-full"
              formgroupclass="h-full"
            />
          </div>

          {/* <AutoResizeTextarea /> */}

          <Menu as="div" className="relative inline-block">
            {({ open }) => (
              <>
                <MenuButton className="flex items-center w-full justify-center gap-3 focus-visible:outline-0 cursor-pointer bg-white-shade xl-desktop:p-[8px_12px] p-[6px_10px] rounded-[8px] border border-border-fill">
                  <div className="">
                    <span className="xl-desktop:text-14 text-12 font-semibold text-text-404040">
                      {selectedStatus}
                    </span>
                  </div>
                  <div className="w-[22px] h-[22px] flex items-center justify-center">
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
                  className="absolute right-0 z-10 mt-2 xl-desktop:w-52 w-46 origin-top-right rounded-[14px] bg-white-background shadow-[0_9px_40px_0_rgba(0,0,0,0.10)] transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div>
                    <MenuItem
                      as="button"
                      onClick={() => handleFilterChange("All Status")}
                      className="w-full px-[20px] py-[11px] data-focus:bg-input-bg data-focus:outline-hidden flex items-center gap-3 rounded-t-[14px] xl-desktop:text-14 text-12 font-medium text-text-404040 border-b-1 border-solid border-border-fill cursor-pointer"
                    >
                      All Status
                    </MenuItem>
                    <MenuItem
                      as="button"
                      onClick={() => handleFilterChange("Completed")}
                      className="w-full px-[20px] py-[11px] data-focus:bg-input-bg data-focus:outline-hidden flex items-center gap-3 xl-desktop:text-14 text-12 font-medium text-text-404040 border-b-1 border-solid border-border-fill cursor-pointer"
                    >
                      Completed
                    </MenuItem>
                    <MenuItem
                      as="button"
                      onClick={() => handleFilterChange("Rejected")}
                      className="w-full px-[20px] py-[11px] data-focus:bg-input-bg data-focus:outline-hidden flex items-center gap-3 xl-desktop:text-14 text-12 font-medium text-text-404040 border-b-1 border-solid border-border-fill cursor-pointer"
                    >
                      Rejected
                    </MenuItem>
                    <MenuItem
                      as="button"
                      onClick={() => handleFilterChange("Processing")}
                      className="w-full px-[20px] py-[11px] data-focus:bg-input-bg data-focus:outline-hidden flex items-center gap-3 rounded-b-[14px] xl-desktop:text-14 text-12 font-medium text-text-404040 cursor-pointer"
                    >
                      Processing
                    </MenuItem>
                  </div>
                </MenuItems>
              </>
            )}
          </Menu>
        </div>
        <div className="overflow-y-hidden overflow-x-auto border border-border-fill rounded-[14px] scrollbar-hide">
          <table className="bg-white-background w-full border-collapse table-auto min-w-[1000px]">
            <thead>
              <tr>
                {tableTitle.map((colTh) => (
                  <th
                    key={colTh.key}
                    className={`xl-desktop:py-4 py-3 px-3 xl-desktop:text-16 text-14 font-semibold text-center capitalize text-text-secondary border-b border-border-fill [&:first-child]:rounded-tl-[14px] [&:last-child]:rounded-tr-[14px] ${colTh.width}`}
                  >
                    {colTh.lable}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentRows.length > 0 ? (
                currentRows.map((row, rowIndex) => (
                  <tr
                    className={`border-b border-border-fill [&:last-child]:border-b-0 `}
                    key={rowIndex}
                  >
                    {tableTitle.map((colTd): any => (
                      <td
                        className="xl-desktop:py-6 px-3 laptop:py-5 sm-mobile:py-4 py-3 text-center xl-desktop:text-16 text-14 font-regular text-text-404040"
                        key={colTd.key}
                      >
                        {colTd.key === "status" ? (
                          <span
                            className={`inline-block rounded-[4px] xl-desktop:text-14 text-12 font-semibold xl-desktop:p-[5px_12px] p-[5px_10px] ${
                              statusClass[row.status?.toLowerCase() || ""]
                            }`}
                          >
                            {row.status}
                          </span>
                        ) : (
                          row[colTd.key as keyof TableRowType] || "-"
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <div>No Data Found</div>
              )}
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <Pagination
            currentPage={currentPage}
            totalItems={filterStatus.length}
            rowsPerPage={rowsPerPage}
            onPageChange={handlePageChange}
            onRowsPerPageChange={(num) => {
              setRowsPerPage(num);
              setCurrentPage(1); // reset page or else currentPage may go out of range
            }}
            maxVisiblePages={2}
            showPageInfo={true}
          />
        </div>
      </div>
    </>
  );
};
