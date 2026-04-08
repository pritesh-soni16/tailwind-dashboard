"use client";

import React, { FC } from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const Select: FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select...",
  className = "",
}) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`border-1 border-solid border-border-fill rounded-[4px] p-[16px] bg-white-shade 
                  focus:outline-none focus:border-primary font-normal text-16 text-text-secondary w-full appearance-none bg-[url(../assets/images/select.svg)] bg-no-repeat bg-position-[right_10px_center] bg-size-[15px_10px] bg-input-bg cursor-pointer ${className}`}
    >
      {placeholder && (
        <option
          value=""
          className="text-16 font-normal text-text-secondary bg-white-background"
          disabled
        >
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option
          className="text-text-secondary bg-white-background"
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};
