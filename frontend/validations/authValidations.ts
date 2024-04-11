import * as yup from "yup";

const strongPasswordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&.,])[A-Za-z\d@$!%*?&.,]{8,}$/;

export const signUpSchema = yup.object({
  name: yup.string().required("full name is required"),
  email: yup.string().email("invalid email type").required("email is required"),
  password: yup
    .string()
    .matches(strongPasswordRegex, {
      message:
        "password must contain a number , special chararcters and be longer than eight characters",
    })
    .required("passowrd is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Required"),
});

export const loginSchema = yup.object({
  email: yup.string().email("invalid email type").required("email is required"),
  password: yup
    .string()
    .matches(strongPasswordRegex, {
      message:
        "password must contain a number , special chararcters and be longer than eight characters",
    })
    .required("password is required"),
});

export const forgotSchema = yup.object({
  email: yup.string().email("invalid email type").required("email is required"),
});

export const resetSchema = yup.object({
  email: yup.string().email("invalid email type").required("email is required"),
  otp: yup
    .string()
    .length(6, "otp must be 6 characters")
    .required("email is required"),
  password: yup
    .string()
    .matches(strongPasswordRegex, {
      message:
        "password must contain a number , special chararcters and be longer than eight characters",
    })
    .required("password is required"),
});

export const onboardSchema = yup.object({
  role: yup.string().required(),
  location: yup.string().required(),
  bio: yup.string().max(300).required(),
  playerName: yup.string().required(),
});
