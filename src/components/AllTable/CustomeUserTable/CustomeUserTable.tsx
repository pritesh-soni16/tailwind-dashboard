"use client";

import React, { FC, useEffect, useState } from "react";

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

interface CustomeUserTableProps {
  striped?: boolean;
}

export const CustomeUserTable: FC<CustomeUserTableProps> = ({ striped }) => {
  const tableTitle: TableTitleType[] = [
    {
      key: "id",
      lable: "ID",
      width: "xl-desktop:w-[90px] sm-mobile:w-[70px] w-[50px]",
    },
    { key: "name", lable: "Name" },
    { key: "address", lable: "Address" },
    {
      key: "date",
      lable: "Date",
      width: "xl-desktop:w-[150px] w-[120px]",
    },
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
  ];

  const statusClass: Record<string, string> = {
    completed: "bg-green-card-shade text-green-card",
    processing: "bg-purple-card-shade text-purple-card",
    rejected: "bg-red-card-shade text-red-card",
  };

  return (
    <>
      <div>
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
              {tableData.map((row, rowIndex) => (
                <tr
                  className={`border-b border-border-fill [&:last-child]:border-b-0 hover:bg-striped ${
                    striped ? "odd:bg-striped" : "odd:bg-transparent"
                  }`}
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
