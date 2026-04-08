"use client";
import { FC, useState } from "react";
import { FieldError, useFormContext } from "react-hook-form";

export interface CheckboxProps {
  label?: React.ReactNode;
  disabled?: boolean;
  id?: string;
  className?: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  lableClass?: string;
}

export const Checkbox: FC<CheckboxProps> = ({
  className,
  name,
  label,
  lableClass,
  disabled,
  id,
  onChange,
  checked,
  ...rest
}) => {
  const context = useFormContext();

  if (context) {
    const {
      register,
      formState: { errors },
    } = context;

    return (
      <label className="flex items-center cursor-pointer select-none relative">
        <input
          type="checkbox"
          className="hidden peer"
          {...register(name)}
          onChange={(e) => {
            register(name).onChange(e);
            onChange && onChange(e);
          }}
          defaultChecked={checked}
          disabled={disabled}
          id={id}
        />
        <span className="absolute laptop:size-[14px] size-[12px] top-0 bottom-0 left-[5px] bg-transparent m-auto rounded-[2px] peer-checked:bg-primary"></span>
        <span className="laptop:size-[24px] size-[22px] rounded-[5px] border-2 border-primary  flex items-center justify-center "></span>
        {label && (
          <label
            htmlFor={id}
            className={`ml-2 text-text-secondary text-14 font-medium ${lableClass}`}
          >
            {label}
          </label>
        )}
        {/* {errors[name] && (
          <span className={`errorMessage`}>
            {(errors[name] as FieldError)?.message}
          </span>
        )} */}
      </label>
    );
  }

  return (
    <label className="flex items-center cursor-pointer select-none relative">
      <input
        type="checkbox"
        checked={checked}
        className="hidden peer"
        name={name}
        onChange={onChange}
        {...rest}
        id={id}
      />
      <span className="absolute laptop:size-[14px] sm-mobile:size-[12px] size-[10px] top-0 bottom-0 left-[5px] bg-transparent m-auto rounded-[2px] peer-checked:bg-primary"></span>
      <span className="laptop:size-[24px] sm-mobile:size-[22px] size-[20px] rounded-[5px] border-2 border-primary  flex items-center justify-center "></span>
      {label && (
        <label
          htmlFor={id}
          className="ml-2 text-text-secondary text-14 font-medium"
        >
          {label}
        </label>
      )}
    </label>
  );
};
