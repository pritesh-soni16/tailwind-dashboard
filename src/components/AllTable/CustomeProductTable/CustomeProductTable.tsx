"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import React, { FC, useState } from "react";

import { Delete, Message, TickRight, ViewIcon } from "@/assets/icons";

import Image1 from "@/assets/images/Product1.jpg";
import Image2 from "@/assets/images/Product2.jpg";
import Image3 from "@/assets/images/Product3.jpg";
import Image4 from "@/assets/images/Product4.jpg";
import Image5 from "@/assets/images/Product5.jpg";
import Image6 from "@/assets/images/Product6.jpg";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Checkbox } from "@/components/core/Checkbox";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/theme-context";

interface TableTitleType {
  key: keyof TableRowType;
  lable: string;
}

interface TableRowType {
  image: string | StaticImageData;
  productname: string;
  category: string;
  price: string;
  piece: number;
  action?: string;
}

interface CustomeProductTableProps {
  striped?: boolean;
}

export const CustomeProductTable: FC<CustomeProductTableProps> = ({
  striped,
}) => {
  const pathname = usePathname();

  const { theme } = useTheme();
  const isDark = theme === "dark";

  const tableTitle: TableTitleType[] = [
    { key: "image", lable: "Image" },
    { key: "productname", lable: "Product Name" },
    { key: "category", lable: "Category" },
    { key: "price", lable: "Price" },
    { key: "piece", lable: "Piece" },
    { key: "action", lable: "Action" },
  ];

  const tableData: TableRowType[] = [
    {
      image: Image1,
      productname: "Apple Watch Series 4",
      category: "Digital Product",
      price: "$690.00",
      piece: 63,
    },
    {
      image: Image2,
      productname: "Microsoft Headsquare",
      category: "Digital Product",
      price: "$190.00",
      piece: 13,
    },
    {
      image: Image3,
      productname: "Women’s Dress",
      category: "Fashion",
      price: "$640.00",
      piece: 635,
    },
    {
      image: Image4,
      productname: "Samsung A50",
      category: "Mobile",
      price: "$400.00",
      piece: 67,
    },
    {
      image: Image5,
      productname: "Camera",
      category: "Electronic",
      price: "$420.00",
      piece: 52,
    },
    {
      image: Image6,
      productname: "Microsoft Headsquare",
      category: "Digital Product",
      price: "$190.00",
      piece: 13,
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);

  const ApproveOpen = () => setModalOpen(true);
  const ApproveClose = () => setModalOpen(false);

  return (
    <>
      <div>
        <div
          className={`overflow-y-hidden overflow-x-auto  rounded-[14px] scrollbar-hide ${
            pathname === "/" ? "" : "border border-border-fill"
          }`}
        >
          <table className="bg-white-background w-full border-collapse table-auto min-w-[1000px]">
            <thead>
              <tr>
                {tableTitle.map((colTh) => (
                  <th
                    key={colTh.key}
                    className={`xl-desktop:py-4 py-3 px-3 xl-desktop:text-16 text-14 font-semibold text-center capitalize text-text-secondary  ${
                      pathname === "/"
                        ? "bg-input-bg [&:first-child]:rounded-l-[14px] [&:last-child]:rounded-r-[14px] mb-[12px]"
                        : "border-b border-border-fill bg-transparent [&:first-child]:rounded-tl-[14px] [&:last-child]:rounded-tr-[14px]"
                    }`}
                  >
                    {colTh.lable}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr
                  className={`border-b border-border-fill [&:last-child]:border-b-0 ${
                    striped ? "odd:bg-striped" : "odd:bg-transparent"
                  }`}
                  key={rowIndex}
                >
                  {tableTitle.map((colTd) => (
                    <td
                      className="xl-desktop:py-6 px-3 laptop:py-5 sm-mobile:py-4 py-3 text-center xl-desktop:text-16 text-14 font-regular text-text-404040"
                      key={colTd.key}
                    >
                      {colTd.key === "image" ? (
                        <Image
                          src={row.image}
                          alt={row.productname}
                          width={80}
                          height={80}
                          className="mx-auto rounded-[14px] object-cover xl-desktop:size-[80px] sm-mobile:size-[60px] size-[45px]"
                        />
                      ) : colTd.key === "action" ? (
                        <div className="mx-auto flex justify-center gap-2">
                          <button className="cursor-pointer flex justify-center items-center bg-purple-card-shade xl-desktop:size-[40px] size-[32px] rounded-[9px] p-1">
                            <ViewIcon
                              width={24}
                              height={24}
                              className="fill-purple-card xl-desktop:max-w-[24px] max-w-[18px]"
                            />
                          </button>
                          <button
                            onClick={ApproveOpen}
                            className="cursor-pointer flex justify-center items-center bg-green-card-shade xl-desktop:size-[40px] size-[32px] rounded-[9px] p-1"
                          >
                            <TickRight
                              width={24}
                              height={24}
                              className="fill-green-card xl-desktop:max-w-[24px] max-w-[18px]"
                            />
                          </button>
                          <button className="cursor-pointer flex justify-center items-center bg-yellow-card-shade xl-desktop:size-[40px] size-[32px] rounded-[9px] p-1">
                            <Message
                              width={24}
                              height={24}
                              className="stroke-yellow-card xl-desktop:max-w-[24px] max-w-[18px]"
                            />
                          </button>
                          <button className="cursor-pointer flex justify-center items-center bg-red-card-shade xl-desktop:size-[40px] size-[32px] rounded-[9px] p-1">
                            <Delete
                              width={24}
                              height={24}
                              className="stroke-red-card xl-desktop:max-w-[24px] max-w-[18px]"
                            />
                          </button>
                        </div>
                      ) : (
                        String(row[colTd.key as keyof TableRowType]) || "-"
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog
        open={modalOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={ApproveClose}
      >
        <div
          className={`fixed inset-0 ${
            isDark ? "bg-[rgba(194,194,194,0.2)]" : "bg-black/40"
          }  transition duration-200 ease-out 
              ${modalOpen ? "backdrop-blur-[10px]" : "backdrop-blur-0"}`}
          aria-hidden="true"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-lg rounded-[15px] bg-white-background sm-mobile:p-6 p-4 duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 shadow-[0_0px_16px_3px_rgba(0,0,0,0.2)]"
            >
              <DialogTitle
                as="h3"
                className="laptop:text-20 sm-mobile:text-18 text-16 font-semibold text-text-secondary"
              >
                Are you sure , You want to approve Product?
              </DialogTitle>
              <div className="laptop:pt-4 pt-3">
                <Checkbox
                  name="product"
                  id="product"
                  label={"Yes, I have checked all Product Details"}
                />
              </div>
              <div className="laptop:mt-7 mt-6 flex laptop:gap-5 gap-3">
                <button className="primary_btn !p-[8px_16px]">Yes</button>
                <button
                  onClick={ApproveClose}
                  className="red_btn !p-[8px_16px]"
                >
                  No
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
