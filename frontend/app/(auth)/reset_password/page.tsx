"use client";
import CtaButton from "@/components/CtaButton";
import AuthFields from "@/components/authFields";
import { reset_password } from "@/requests/authRequest";
import { resetSchema } from "@/validations/authValidations";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const page = () => {
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
    <div className="flex items-center justify-center">
      <div className="bg-[#FFFCFC44] shadow-xl min-h-[70vh] w-[100%] md:w-[50%] xl:w-[40%] flex flex-col items-center py-3 rounded-lg px-6 gap-2 text-white">
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
        <CtaButton name="Request Otp" action={handleSubmit} />
      </div>
    </div>
  );
};

export default page;
