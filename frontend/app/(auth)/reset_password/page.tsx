"use client";
import CtaButton from "@/components/CtaButton";
import AuthFields from "@/components/authFields";
import { reset_password } from "@/lib/actions/authRequest";
import { resetSchema } from "@/validations/authValidations";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const ResetPage = () => {
  const router = useRouter();

  const onSubmit = async (values: any) => {
    try {
      const response = await reset_password(values);
      if (response) {
        toast.success(response.data, { theme: "colored" });
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { errors, values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      otp: "",
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema: resetSchema,
  });

  return (
    <div className="w-[90%] ">
      <div className="   flex flex-col py-3 rounded-lg  gap-1 text-white">
        <h2 className="font-bold text-2xl ">Reset Password</h2>
        <AuthFields
          name="otp"
          onChange={handleChange}
          errors={errors.otp}
          value={values.otp}
          title="One time Pin "
          placeholder="Enter your Otp"
        />
        <AuthFields
          name="email"
          onChange={handleChange}
          errors={errors.email}
          value={values.email}
          title="Email Address "
          placeholder="Enter your email"
        />{" "}
        <AuthFields
          name="password"
          onChange={handleChange}
          errors={errors.password}
          value={values.password}
          title="new Password "
          placeholder="Enter your password"
        />
        <div className="mt-[2rem]">
          <CtaButton name="Reset Password" action={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ResetPage;
