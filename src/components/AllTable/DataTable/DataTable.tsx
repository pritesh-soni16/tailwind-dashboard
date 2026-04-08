"use client";

import { Chevron, Delete, Edit } from "@/assets/icons";
import { Input, Select } from "@/components/core";
import { useTheme } from "@/context/theme-context";
import {
  ColumnFiltersState,
  createColumnHelper,
  FilterFn,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useState } from "react";

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: Person[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
  {
    firstName: "name",
    lastName: "surname",
    age: 50,
    visits: 60,
    status: "Single",
    progress: 20,
  },
  {
    firstName: "new",
    lastName: "sdsadsa",
    age: 25,
    visits: 30,
    status: "In Relationship	",
    progress: 65,
  },
  {
    firstName: "sdsdsd",
    lastName: "sdsadsa",
    age: 45,
    visits: 58,
    status: "Single",
    progress: 55,
  },
  {
    firstName: "Hello",
    lastName: ";lk;l",
    age: 55,
    visits: 88,
    status: "In Relationship	",
    progress: 10,
  },
  {
    firstName: "new",
    lastName: "sdsadsa",
    age: 25,
    visits: 30,
    status: "In Relationship	",
    progress: 65,
  },
  {
    firstName: "sdsdsd",
    lastName: "sdsadsa",
    age: 45,
    visits: 58,
    status: "Single",
    progress: 55,
  },
  {
    firstName: "Hello",
    lastName: ";lk;l",
    age: 55,
    visits: 88,
    status: "In Relationship	",
    progress: 10,
  },
  {
    firstName: "Newwww",
    lastName: "oooo[[",
    age: 45,
    visits: 58,
    status: "Single",
    progress: 55,
  },
  {
    firstName: "super",
    lastName: "klkll",
    age: 55,
    visits: 88,
    status: "In Relationship	",
    progress: 10,
  },
  {
    firstName: "pkpop",
    lastName: "ppopopop",
    age: 25,
    visits: 30,
    status: "In Relationship	",
    progress: 65,
  },
  {
    firstName: "mmjnjn",
    lastName: "kmkokkoo",
    age: 45,
    visits: 58,
    status: "Single",
    progress: 55,
  },
  {
    firstName: "pojojoj",
    lastName: "bubyvyv",
    age: 55,
    visits: 88,
    status: "In Relationship	",
    progress: 10,
  },
];

const numberRangeFilter: FilterFn<Person> = (
  row,
  columnId,
  filterValue: { min?: number; max?: number }
) => {
  const value = row.getValue<number>(columnId);
  const { min, max } = filterValue;

  if (min !== undefined && value < min) return false;
  if (max !== undefined && value > max) return false;
  return true;
};

const columnHelper = createColumnHelper<Person>();

const handleEdit = (person: Person) => {
  console.log("Edit", person);
  // Open modal or navigate to edit screen
};

const handleDelete = (person: Person) => {
  console.log("Delete", person);
  // Confirm and delete logic
};

export const DataTable = () => {
  const [data, setData] = useState<Person[]>(() => [...defaultData]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const { theme } = useTheme();
  const isDark = theme === "dark";

  const Statusoptions = [
    { label: "All", value: "" },
    { label: "In Relationship", value: "In Relationship" },
    { label: "Single", value: "Single" },
    { label: "Complicated", value: "Complicated" },
  ];

  const columns = [
    columnHelper.accessor("firstName", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.lastName, {
      id: "lastName",
      cell: (info) => info.getValue(),
      header: () => <span>Last Name</span>,
    }),
    columnHelper.accessor("age", {
      header: () => "Age",
      cell: (info) => info.renderValue(),
      filterFn: numberRangeFilter,
    }),
    columnHelper.accessor("visits", {
      header: () => <span>Visits</span>,
      filterFn: numberRangeFilter,
    }),
    columnHelper.accessor("status", {
      header: "Status",
    }),
    columnHelper.accessor("progress", {
      header: "Profile Progress",
      filterFn: numberRangeFilter,
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="border border-border-fill mx-auto xl-desktop:max-w-[100px] laptop:max-w-[80px] max-w-[70px] flex justify-center rounded-[8px] bg-input-bg">
          <button
            onClick={() => handleEdit(row.original)}
            className="cursor-pointer xl-desktop:p-2 laptop:p-[5px] p-[3px] w-full flex justify-center items-center border-r border-border-fill "
          >
            <Edit
              width={20}
              height={20}
              className={`${
                isDark ? "stroke-[#fff]" : "stroke-[#000]"
              } xl-desktop:max-w-[20px] laptop:max-w-[17px] max-w-[15px]`}
            />
          </button>
          <button
            onClick={() => handleDelete(row.original)}
            className="cursor-pointer xl-desktop:p-2 p-[5px] w-full flex justify-center items-center"
          >
            <Delete
              width={20}
              height={20}
              stroke="#EF3826"
              className="xl-desktop:max-w-[20px] laptop:max-w-[17px] max-w-[15px]"
            />
          </button>
        </div>
      ),
    }),
  ];

  const table = useReactTable<Person>({
    data,
    columns,
    pageCount: Math.ceil(data.length / pagination.pageSize),
    state: {
      columnFilters,
      pagination,
    },
    onPaginationChange: setPagination,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <div>
        <div className="overflow-y-hidden overflow-x-auto border border-border-fill rounded-[14px] scrollbar-hide">
          <table className="bg-white-background w-full border-collapse table-fixed sm-mobile:min-w-[1200px] min-w-[1000px]">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      className="bg-white-background laptop:py-4 py-3 px-3 xl-desktop:text-16 text-14 font-semibold capitalize text-text-secondary border-r border-b border-border-fill [&:first-child]:rounded-tl-[14px] [&:last-child]:rounded-tr-[14px] [&:last-child]:border-r-0"
                      key={header.id}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      {header.column.getCanFilter() && (
                        <div className="mt-2">
                          {["age", "visits", "progress"].includes(
                            header.column.id!
                          ) ? (
                            <>
                              <div className="flex gap-3">
                                <Input
                                  name="number"
                                  type="number"
                                  placeholder="Min"
                                  formgroupclass="w-full"
                                  formClass="w-full laptop:!p-[5px_8px] !p-[4px_6px] !text-14 placeholder:!text-14"
                                  value={
                                    (header.column.getFilterValue() as any)
                                      ?.min ?? ""
                                  }
                                  onChange={(e: any) =>
                                    header.column.setFilterValue(
                                      (old: any = {}) => ({
                                        ...old,
                                        min: e.target.value
                                          ? parseInt(e.target.value)
                                          : undefined,
                                      })
                                    )
                                  }
                                />
                                <Input
                                  name="number"
                                  type="number"
                                  placeholder="Max"
                                  formgroupclass="w-full"
                                  formClass="w-full laptop:!p-[5px_8px] !p-[4px_6px] !text-14 placeholder:!text-14"
                                  value={
                                    (header.column.getFilterValue() as any)
                                      ?.max ?? ""
                                  }
                                  onChange={(e: any) =>
                                    header.column.setFilterValue(
                                      (old: any = {}) => ({
                                        ...old,
                                        max: e.target.value
                                          ? parseInt(e.target.value)
                                          : undefined,
                                      })
                                    )
                                  }
                                />
                              </div>
                            </>
                          ) : header.column.id === "status" ? (
                            // <select
                            //   value={
                            //     (header.column.getFilterValue() ?? "") as string
                            //   }
                            //   onChange={(e) =>
                            //     header.column.setFilterValue(e.target.value)
                            //   }
                            //   className="w-full p-1 text-sm border-1 border-border-fill rounded"
                            // >
                            //   <option value="">All</option>
                            //   <option value="Single">Single</option>
                            //   <option value="In Relationship">
                            //     In Relationship
                            //   </option>
                            //   <option value="Complicated">Complicated</option>
                            // </select>
                            <Select
                              options={Statusoptions}
                              value={
                                (header.column.getFilterValue() ?? "") as string
                              }
                              onChange={header.column.setFilterValue}
                              className="laptop:!p-[5px_8px] !p-[4px_6px] !text-14"
                            />
                          ) : (
                            <Input
                              type="text"
                              name="searchcolumn"
                              placeholder="search here"
                              formgroupclass="w-full"
                              formClass="w-full laptop:!p-[5px_8px] !p-[4px_6px] !text-14 placeholder:!text-14"
                              value={
                                (header.column.getFilterValue() ?? "") as string
                              }
                              onChange={(e: any) =>
                                header.column.setFilterValue(e.target.value)
                              }
                            />
                          )}
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  className="border-b border-border-fill [&:last-child]:border-b-0"
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      className="xl-desktop:px-6 laptop:px-4 px-3 xl-desktop:py-4 py-3 text-center xl-desktop:text-16 text-14 font-regular text-text-404040"
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between mt-2 p-[5px_0px] rounded-[14px] shadow-custome">
          <div className="flex gap-2 items-center">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="primary_btn m-laptop:!p-[7px] !p-[6px] min-w-[unset]"
            >
              <Chevron
                width={24}
                height={24}
                rotate={180}
                fill="white"
                className="laptop:max-w-[24px] laptop:max-h-[24px] max-w-[20px] max-h-[20px]"
              />
            </button>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="primary_btn m-laptop:!p-[7px] !p-[6px] min-w-[unset]"
            >
              <Chevron
                width={24}
                height={24}
                rotate={0}
                fill="white"
                className="laptop:max-w-[24px] laptop:max-h-[24px] max-w-[20px] max-h-[20px]"
              />
            </button>
          </div>

          <span className="text-14 text-text-secondary">
            Page{" "}
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </span>

          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) =>
              setPagination((old) => ({
                ...old,
                pageSize: Number(e.target.value),
              }))
            }
            className="border-1 border-solid border-border-fill rounded-[4px] tablet:p-[8px_10px] p-[6px_8px] bg-white-shade 
                  focus:outline-none focus:border-primary font-normal tablet:text-14 text-12 text-text-secondary tablet:min-w-[110px] min-w-[90px] appearance-none bg-[url(../assets/images/select.svg)] bg-no-repeat bg-position-[right_11px_center] bg-size-[12px_10px] bg-input-bg cursor-pointer"
          >
            {[5, 10, 20, 50].map((pageSize) => (
              <option
                className="text-text-secondary bg-white-background"
                key={pageSize}
                value={pageSize}
              >
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};
