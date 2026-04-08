"use client";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useEffect } from "react";
import {
  DefaultValues,
  FieldValues,
  FormProvider,
  Mode,
  Resolver,
  UseFormReturn,
  useForm,
} from "react-hook-form";

export type ISubmitHandler<T extends FieldValues> = (
  data: T,
  methods: UseFormReturn<T>,
) => unknown | Promise<unknown>;

export interface FormProps<T extends FieldValues> {
  onSubmit: ISubmitHandler<T>;
  schema?: yup.AnyObjectSchema;
  children: React.ReactNode;
  className: string;
  defaultValues?: DefaultValues<T>;
  resetData?: DefaultValues<T>;
  mode?: Mode;
}

export function Form<T extends FieldValues>({
  schema,
  children,
  onSubmit,
  defaultValues,
  resetData,
  mode = "onChange",
  ...rest
}: FormProps<T>) {
  const methods = useForm<T>({
    defaultValues,
    resolver: yupResolver(schema as yup.AnyObjectSchema) as Resolver<T>,
    mode: mode,
    reValidateMode: "onChange",
  });

  useEffect(() => {
    if (resetData) {
      methods.reset(resetData);
    }
  }, [methods, resetData]);

  const handleSubmit = async (values: T) => {
    try {
      await onSubmit(values, methods);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleSubmit)}
        noValidate // Add this to prevent browser validation
        {...rest}
      >
        {children}
      </form>
    </FormProvider>
  );
}
