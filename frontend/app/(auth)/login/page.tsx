"use client";
import AuthCtaLinks from "@/components/AuthCtaLinks";
import CtaButton from "@/components/CtaButton";
import AuthFields from "@/components/authFields";
import { loginUser } from "@/lib/actions/authRequest";
import { loginSchema } from "@/validations/authValidations";
import { useFormik } from "formik";
import React from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Separator } from "@/components/ui/separator";

const Login = () => {
  const router = useRouter();

  const onSubmit = async (values: any) => {
    try {
      toast("loging youin please wait");
      const response = await loginUser(values);
      if (response) {
        toast("Login Successful", { theme: "colored" });
        localStorage.setItem("portback_user", JSON.stringify(response.data));

        if (response?.data.onBoarded === false) {
          router.push("/onboarding");
          console.log(false);
        } else {
          router.push("/");
        }
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
          <div className="basis-1/4">
            <CtaButton name="Lets go" action={handleSubmit} />
          </div>
        </div>

        <div className="mt-[3rem] flex items-center gap-3">
          <p className="font-sans text-muted-foreground">Other Options</p>
          <Separator className="bg-muted-foreground flex-1" />
        </div>
        <AuthCtaLinks
          linksArray={[
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
