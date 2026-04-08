"use client";

import Image from "next/image";
import React from "react";

import loginImage from "@/assets/images/login-img.svg";
import Login_logo from "@/assets/images/login-logo.svg";
import { Form, Input } from "../core";
import { loginSchema } from "@/utils/validationSchemas";
import { Checkbox } from "../core/Checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Login = () => {
  const handleSubmit = async (data: any) => {
    console.log("Form values:", data);
  };
  return (
    <>
      <div className="h-screen overflow-hidden flex items-center ">
        <div className="m-laptop:w-3/5 w-[55%] h-full p-[62px_0] bg-body">
          <div className="flex justify-end items-start h-full">
            <Image
              alt="login-img"
              src={loginImage}
              width={1084}
              height={900}
              className="max-h-[950px] xxl-desktop:max-w-[1000px] xl-desktop:max-w-[850px] m-laptop:max-w-[760px] max-w-[620px] m-[auto_0]"
            />
          </div>
        </div>
        <div className="w-2/5 bg-white h-full overflow-auto common-scrollbar flex py-[80px]">
          <div className="xxl-desktop:w-[480px] xl-desktop:w-[440px] w-[380px] m-[auto] xxl-desktop:ml-[100px]">
            <div>
              <div className="w-full pb-[50px] flex justify-center">
                <Image
                  alt="login-logo"
                  src={Login_logo}
                  width={220}
                  height={43}
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="xl-desktop:text-32 text-30 font-semibold text-primary">
                  Login to Account
                </span>
                <span className="xl-desktop:text-16 text-14 font-medium text-text-secondary-op7">
                  Please enter your email and password to continue
                </span>
              </div>
            </div>
            <Form
              schema={loginSchema}
              onSubmit={handleSubmit}
              className="xl-desktop:pt-[40px] pt-[32px] flex flex-col xl-desktop:gap-8 gap-7"
            >
              <Input
                type="text"
                name="email"
                placeholder="esteban_schiller@gmail.com"
                label="Email address"
              />
              <div>
                <Input
                  type="password"
                  name="password"
                  placeholder="* * * * * *"
                  label="Password"
                />
                <div className="pt-3 flex justify-between">
                  <Checkbox
                    name="passwordRemember"
                    id="passwordRemember"
                    label="Remember Password"
                  />
                  <Link
                    href={"/"}
                    className="text-14 font-medium text-text-primary hover:text-text-secondary transition-all duration-400 ease-in-out"
                  >
                    Forget Password?
                  </Link>
                </div>
              </div>
              <div className="pt-3">
                <button type="submit" className="primary_btn w-full">
                  Sign In
                </button>
                <span className="text-center w-full block pt-3 xl-desktop:text-18 text-16 font-normal">
                  Don’t have an account?{" "}
                  <Link
                    href={"/register"}
                    className="text-text-primary hover:text-text-secondary font-semibold transition-all duration-400 ease-in-out underline"
                  >
                    Create Account
                  </Link>
                </span>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
