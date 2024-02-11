"use client";
import CtaButton from "@/components/CtaButton";
import AuthFields from "@/components/authFields";
import { forgot_password } from "@/requests/authRequest";
import { forgotSchema } from "@/validations/authValidations";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const Forgot = () => {
  const router = useRouter();

  const onSubmit = async (values: any) => {
    try {
      const response = await forgot_password(values);
      if (response) {
        toast.success(response.data, { theme: "colored" });
        router.push("/reset_password");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { errors, values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit,
    validationSchema: forgotSchema,
  });

  return (
    <div className="w-[90%] ">
      <div className="   flex flex-col py-3 rounded-lg  gap-1 text-white">
        <h2 className="font-bold text-2xl ">Forgot Password</h2>
        <AuthFields
          name="email"
          onChange={handleChange}
          errors={errors.email}
          value={values.email}
          title="Email "
          placeholder="Enter your email"
        />

        <CtaButton name="Request Otp" action={handleSubmit} />
      </div>
    </div>
  );
};

export default Forgot;
