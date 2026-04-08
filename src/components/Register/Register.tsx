"use client";

import Image from "next/image";
import React from "react";

import loginImage from "@/assets/images/login-image.png";
import Login_logo from "@/assets/images/login-logo.svg";
import { Form, Input } from "../core";
import { RegisterSchema } from "@/utils/validationSchemas";
import { Checkbox } from "../core/Checkbox";
import Link from "next/link";

type RegisterFormData = {
  email: string;
  username: string;
  password: string;
  passwordRemember: true;
};

export const Register = () => {
  const handleSubmit = async (data: RegisterFormData) => {
    console.log("Form values:", data);
  };
  return (
    <>
      <div className="h-screen overflow-hidden flex items-center ">
        <div className="w-3/5 h-full p-[62px_0] bg-body">
          <div className="flex justify-end items-center">
            <Image
              alt="login-img"
              src={loginImage}
              width={1070}
              height={900}
              className="max-h-[850px]"
            />
          </div>
        </div>
        <div className="w-2/5 bg-white h-full overflow-auto common-scrollbar flex py-[80px]">
          <div className="w-[480px] m-auto">
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
                <span className="text-32 font-semibold text-primary">
                  Create an Account
                </span>
                <span className="text-16 font-medium text-text-secondary-op7">
                  Create a account to continue
                </span>
              </div>
            </div>
            <Form
              schema={RegisterSchema}
              onSubmit={handleSubmit}
              className="pt-[40px] flex flex-col gap-8"
            >
              <Input
                type="text"
                name="email"
                placeholder="esteban_schiller@gmail.com"
                label="Email"
              />
              <Input
                type="text"
                name="username"
                placeholder="username"
                label="Username"
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
                    label="I accept terms and conditions"
                  />
                </div>
              </div>
              <div className="pt-3">
                <button type="submit" className="primary_btn w-full">
                  Sign Up
                </button>
                <span className="text-center w-full block pt-3 text-18 font-normal">
                  Already have an account?{" "}
                  <Link
                    href={"/login"}
                    className="text-text-primary hover:text-text-secondary font-semibold transition-all duration-400 ease-in-out underline"
                  >
                    Login
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
