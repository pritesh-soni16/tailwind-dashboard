"use client";

import { HidePassword, ShowPassword } from "@/assets/icons";
import { convertCamelCaseToWords } from "@/utils/helper";
import React, { FC, useState } from "react";
import { FieldError, get, useFormContext } from "react-hook-form";

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  lable?: string;
  formgroupclass?: string;
  name: string;
  formClass?: string;
  hasPrompt?: boolean;
  errorMsg?: string;
}

export const Input: FC<InputProps> = ({
  label,
  type = "text",
  formgroupclass,
  formClass,
  name,
  errorMsg = "",
  hasPrompt = false,
  ...rest
}) => {
  const context = useFormContext();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const passwordRules = [
    { text: "At least 6 characters", regex: /.{6,}/ },
    {
      text: "Upper and lowercase characters",
      regex: /^(?=.*[a-z])(?=.*[A-Z])/,
    },
    { text: "At least one number", regex: /^(?=.*\d)/ },
    { text: "At least 1 special character", regex: /[^A-Za-z0-9\s]/ },
  ];

  if (context) {
    const {
      register,
      formState: { errors },
      watch,
    } = context;

    const passwordValue = watch(name);

    const errorMessage = (get(errors, name) as FieldError)?.message;

    if (type === "password") {
      return (
        <>
          <div className={`flex flex-col gap-3 ${formgroupclass} `}>
            {label && (
              <label className="text-16 font-normal text-text-secondary-op7">
                {label}
              </label>
            )}
            <div className="relative">
              <input
                type={isPasswordVisible ? "text" : "password"}
                className={`bg-input-bg xl-desktop:p-[16px] p-[13px] rounded-[8px] focus:outline-0 focus:shadow-none border-1 border-solid border-border-fill focus:border-primary font-normal text-16 text-text-secondary placeholder:text-16 placeholder:font-normal placeholder:text-input-text w-full placeholder:translate-y-[20%] ${formClass}`}
                {...register(name as string)}
                {...rest}
                autoComplete="off"
                onFocus={() => setShowPasswordPrompt(true)}
                onBlur={() => setShowPasswordPrompt(false)}
              />
              <button
                type="button"
                className={`absolute top-0 bottom-0 right-[16px] m-auto size-[24px] cursor-pointer`}
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? <HidePassword /> : <ShowPassword />}
              </button>
            </div>
          </div>
          {showPasswordPrompt && hasPrompt && (
            <div className={``}>
              <div>
                <span className="text-text-secondary font-medium text_14 mb-3 inline-block w-full">
                  Your password must have:
                </span>
                {passwordRules.map(({ text, regex }, index) => {
                  const isValid = regex.test(passwordValue || "");
                  return (
                    <div
                      key={index}
                      className="d-flex mb-2 pb-1 align-items-center"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="9"
                          stroke={isValid ? "#306AED" : "#B6130F"}
                        />
                        {isValid ? (
                          <path
                            d="M8 11.898L11.0316 15L17 9"
                            stroke="#306AED"
                            strokeLinecap="square"
                          />
                        ) : (
                          <>
                            <path
                              d="M9.14286 14.8572L14.8571 9.14293"
                              stroke="#B6130F"
                              strokeLinecap="square"
                            />
                            <path
                              d="M9.14286 9.14279L14.8571 14.8571"
                              stroke="#B6130F"
                              strokeLinecap="square"
                            />
                          </>
                        )}
                      </svg>
                      <span className="font_14 fw-normal ps-2 ms-1 d-flex align-items-center">
                        {text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {hasPrompt ? (
            <>
              {errorMessage && !showPasswordPrompt && (
                <span
                  className={`${errorMsg} text-red pt-2 inline-block text-14 w-full`}
                >
                  {convertCamelCaseToWords(errorMessage! as string)}
                </span>
              )}
            </>
          ) : (
            <>
              {errorMessage && (
                <span
                  className={`${errorMsg} text-red pt-2 inline-block text-14 w-full`}
                >
                  {convertCamelCaseToWords(errorMessage! as string)}
                </span>
              )}
            </>
          )}
        </>
      );
    }

    return (
      <div className={`${formgroupclass}`}>
        <div className={`flex flex-col gap-3 `}>
          {label && (
            <label className="text-16 font-normal text-text-secondary-op7">
              {label}
            </label>
          )}
          <input
            type={type}
            className={`bg-input-bg xl-desktop:p-[16px] p-[13px] rounded-[8px] focus:outline-0 focus:shadow-none border-1 border-solid border-border-fill focus:border-primary font-normal text-16 text-text-secondary placeholder:text-16 placeholder:font-normal placeholder:text-input-text w-full ${formClass}`}
            {...register(name as string)}
            {...rest}
            autoComplete="off"
          />
        </div>
        {errorMessage && (
          <span
            className={`${errorMsg} text-red pt-2 inline-block text-14 w-full`}
          >
            {convertCamelCaseToWords(errorMessage! as string)}
          </span>
        )}
      </div>
    );
  }

  return (
    <>
      <div className={`flex flex-col gap-3 ${formgroupclass}`}>
        {label && <label>{label}</label>}
        <input
          type={type}
          className={`bg-input-bg xl-desktop:p-[16px] p-[13px] rounded-[8px] focus:outline-0 focus:shadow-none border-1 border-solid border-border-fill focus:border-primary font-normal text-16 text-text-secondary placeholder:text-16 placeholder:font-normal placeholder:text-input-text w-full ${formClass}`}
          {...rest}
          autoComplete="off"
        />
      </div>
    </>
  );
};
