"use client";
import React, { useState } from "react";
import { CustomeUserTable } from "./CustomeUserTable";
import { DataTable } from "./DataTable";
import { CustomeProductTable } from "./CustomeProductTable";
import { CustomeFeatureTable } from "./CustomeFeatureTable";

export const AllTable = () => {
  const [UTStriped, setUTStriped] = useState(false);
  const [PTStriped, setPTStriped] = useState(false);

  return (
    <>
      <section>
        <div className="flex flex-col xl-desktop:gap-8 sm-mobile:gap-6 gap-4">
          <span className="xxl-desktop:text-32 xl-desktop:text-30/[35px] sm-mobile:text-24/[32px] text-20/[26px] font-semibold text-text-secondary">
            All Table
          </span>
          <div>
            <div className="flex justify-between items-center sm-mobile:mb-4 mb-2 bg-white-background sm-mobile:p-[12px_25px] p-[8px_16px]  sm-mobile:rounded-[14px] rounded-[10px] shadow-custom">
              <span className="xxl-desktop:text-24/[30px] xl-desktop:text-22/[26px] sm-mobile:text-18/[24px] text-16/[24px] font-semibold text-text-primary block ">
                Data Table
              </span>
            </div>
            <DataTable />
          </div>
          <div>
            <div className="flex justify-between items-center sm-mobile:mb-4 mb-2 bg-white-background sm-mobile:p-[12px_25px] p-[8px_16px]  sm-mobile:rounded-[14px] rounded-[10px] shadow-custom">
              <span className="xxl-desktop:text-24/[30px] xl-desktop:text-22/[26px] sm-mobile:text-18/[24px] text-16/[24px] font-semibold text-text-primary block ">
                Custome User Table
              </span>
              <button
                onClick={() => setUTStriped((prev) => !prev)}
                className="bg-primary text-white p-[7px_14px] xl-desktop:text-14 text-12 font-medium rounded-[8px] cursor-pointer"
              >
                {UTStriped ? "Remove Striped" : "Add Striped"}
              </button>
            </div>
            <CustomeUserTable striped={UTStriped} />
          </div>
          <div>
            <div className="flex justify-between items-center sm-mobile:mb-4 mb-2 bg-white-background sm-mobile:p-[12px_25px] p-[8px_16px]  sm-mobile:rounded-[14px] rounded-[10px] shadow-custom">
              <span className="xxl-desktop:text-24/[30px] xl-desktop:text-22/[26px] sm-mobile:text-18/[24px] text-16/[24px] font-semibold text-text-primary block ">
                Custome Product Table
              </span>
              <button
                onClick={() => setPTStriped((prev) => !prev)}
                className="bg-primary text-white p-[7px_14px] xl-desktop:text-14 text-12 font-medium rounded-[8px] cursor-pointer"
              >
                {PTStriped ? "Remove Striped" : "Add Striped"}
              </button>
            </div>
            <CustomeProductTable striped={PTStriped} />
          </div>
          <div>
            <div className="flex justify-between items-center sm-mobile:mb-4 mb-2 bg-white-background sm-mobile:p-[12px_25px] p-[8px_16px]  sm-mobile:rounded-[14px] rounded-[10px] shadow-custom">
              <span className="xxl-desktop:text-24/[30px] xl-desktop:text-22/[26px] sm-mobile:text-18/[24px] text-16/[24px] font-semibold text-text-primary block ">
                Custome Feature Table
              </span>
            </div>
            <CustomeFeatureTable />
          </div>
        </div>
      </section>
    </>
  );
};
