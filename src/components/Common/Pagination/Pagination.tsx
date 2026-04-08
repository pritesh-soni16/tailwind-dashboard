import { Chevron } from "@/assets/icons";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number;
  showPageInfo?: boolean;
  onRowsPerPageChange?: (num: number) => void;
  entriesOptions?: number[];
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  rowsPerPage = 10,
  onPageChange,
  // maxVisiblePages = 5,
  onRowsPerPageChange,
  entriesOptions = [10, 25, 50, 100],
  showPageInfo = false,
}) => {
  // const totalPages = Math.ceil(totalItems / rowsPerPage);

  // if (totalPages <= 1) return null;

  // Calculate start and end page numbers
  // let start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  // let end = start + maxVisiblePages - 1;

  // if (end > totalPages) {
  //   end = totalPages;
  //   start = Math.max(1, end - maxVisiblePages + 1);
  // }

  const totalPages = Math.ceil(totalItems / rowsPerPage);

  const endItem = Math.min(currentPage * rowsPerPage, totalItems);

  const getPageNumbers = () => {
    const pages: (number | "...")[] = [];
    const last = totalPages;

    if (totalPages <= 4) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    let start = currentPage - 1;
    let end = currentPage + 1;

    if (currentPage <= 3) {
      start = 1;
      end = 3;
    }

    if (currentPage >= last - 2) {
      start = last - 2;
      end = last;
    }

    for (let i = start; i <= end; i++) pages.push(i);

    if (end < last - 1) pages.push("...");

    if (end < last) pages.push(last);

    return pages;
  };

  return (
    <div
      className={`${
        showPageInfo ? "justify-between" : "justify-center"
      } w-full flex items-center `}
    >
      {/* {showPageInfo && (
        <span className="xl-desktop:text-16 text-14 text-text-secondary">
          Page {currentPage} of {totalPages}
        </span>
      )} */}

      {/* Entries + Showing text */}
      <div className="flex items-center justify-between w-full mb-3">
        {/* Entries dropdown */}
        <div className="flex items-center gap-2 text-14 text-text-secondary">
          <span>Show</span>

          <select
            value={rowsPerPage}
            onChange={(e) => onRowsPerPageChange?.(Number(e.target.value))}
            className="px-2 py-1 border border-border-fill rounded-md bg-white text-text-secondary"
          >
            {entriesOptions.map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>

          <span>entries</span>
        </div>

        {/* Showing x–y of Z results */}
        <div className="text-14 text-text-secondary">
          Showing {endItem} of {totalItems} results
        </div>
      </div>

      <div className="flex items-center justify-center bg-primary rounded-[8px]">
        {/* Prev */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className=" text-white items-center justify-center flex disabled:opacity-50 cursor-pointer py-2 px-1 xl-desktop:size-[40px] size-[32px]"
          disabled={currentPage === 1}
        >
          <Chevron width={22} height={22} fill="#fff" rotate={180} />
        </button>

        {/* Page numbers */}
        {/* {Array.from({ length: end - start + 1 }, (_, idx) => {
          const pageNum = start + idx;
          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`font-semibold border-r border-l border-border-fill px-1 xl-desktop:size-[40px] size-[32px] py-2 xl-desktop:text-16 text-14 text-white`}
            >
              {pageNum}
            </button>
          );
        })} */}
        {getPageNumbers().map((page, idx) => (
          <button
            key={`${page}-${idx}`}
            disabled={page === "..."}
            onClick={() => typeof page === "number" && onPageChange(page)}
            className={`font-semibold border-r border-l border-border-fill px-1 
      xl-desktop:size-[40px] size-[32px] py-2 xl-desktop:text-16 text-14 text-white 
      ${page === currentPage ? "bg-white/20" : ""}
      ${page === "..." ? "cursor-default opacity-60" : ""}
    `}
          >
            {page}
          </button>
        ))}

        {/* Next */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className=" text-white items-center justify-center flex disabled:opacity-50 cursor-pointer px-1 xl-desktop:size-[40px] size-[32px] py-2"
          disabled={currentPage === totalPages}
        >
          <Chevron width={22} height={22} fill="#fff" rotate={0} />
        </button>
      </div>
    </div>
  );
};
