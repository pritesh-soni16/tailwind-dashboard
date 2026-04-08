import * as Yup from "yup";

export const passwordSchema = Yup.object({
  password: Yup.string()
    .required("Password is a required field")
    .min(6, "Password must be at least 6 characters")
    .max(30, "Password must be less than or equal to 30 characters")
    .matches(/[a-z]/, "Password must contain at least 1 lower case letter")
    .matches(/[A-Z]/, "Password must contain at least 1 upper case letter")
    .matches(/[0-9]/, "Password must contain at least 1 number")
    .matches(
      /[^a-zA-Z0-9]/,
      "Password must contain at least 1 special character"
    ),
});


export const loginSchema = Yup.object({
  email: Yup.string().email("email_invalid").required("email_required"),
  password: Yup.string().required("password_required"),
});


export const RegisterSchema = Yup.object({
  email: Yup.string().email("email_invalid").required("email_required"),
  username: Yup.string() 
  .min(3, "Username Too Short") 
  .max(20, "Username Too Long") 
  .matches(/^[a-zA-Z0-9_]+$/, "Username Invalid") 
  .required("Username Required"),
  password: Yup.string()
    .required("Password is a required field")
    .min(6, "Password must be at least 6 characters")
    .max(30, "Password must be less than or equal to 30 characters")
    .matches(/[a-z]/, "Password must contain at least 1 lower case letter")
    .matches(/[A-Z]/, "Password must contain at least 1 upper case letter")
    .matches(/[0-9]/, "Password must contain at least 1 number")
    .matches(
      /[^a-zA-Z0-9]/,
      "Password must contain at least 1 special character"
    ),
});