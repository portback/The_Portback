"use client";
import AuthCtaLinks from "@/components/AuthCtaLinks";
import CtaButton from "@/components/CtaButton";
import AuthFields from "@/components/authFields";
import { loginUser } from "@/requests/authRequest";
import { loginSchema } from "@/validations/authValidations";
import { useFormik } from "formik";
import React from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();

  const onSubmit = async (values: any) => {
    try {
      const response = await loginUser(values);
      if (response) {
        toast("Login Successful", { theme: "colored" });
        localStorage.setItem("portback_user", JSON.stringify(response.data));
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { errors, values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema: loginSchema,
  });

  return (
    <div className="w-[90%] ">
      <div className="   flex flex-col py-3 rounded-lg  gap-1 text-white">
        <h2 className="font-bold text-2xl font-sans">Welcome Back</h2>
        <AuthFields
          name="email"
          onChange={handleChange}
          errors={errors.email}
          value={values.email}
          title="Email "
          placeholder="Enter your email"
        />
        <div className="flex gap-1 items-center ">
          <div className="flex-1">
            <AuthFields
              name="password"
              onChange={handleChange}
              value={values.password}
              errors={errors.password}
              title="Password "
              placeholder="Enter your password"
            />
          </div>
          <div className="">
            <p>Other Options</p>
            
          </div>
          <div className="basis-1/4">
            <CtaButton name="Lets go" action={handleSubmit} />
          </div>
        </div>

        <AuthCtaLinks
          linksArray={[
            {
              name: "Dont have an account? Register",
              href: "/register",
            },
            {
              name: "Forgot Password",
              href: "/forgot_password",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Login;
