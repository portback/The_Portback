"use client";
import React from "react";
import AuthCtaLinks from "@/components/AuthCtaLinks";
import CtaButton from "@/components/CtaButton";
import AuthFields from "@/components/authFields";
import { useFormik } from "formik";
import { signUpSchema } from "@/validations/authValidations";
import { createUser } from "@/requests/authRequest";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  const onSubmit = async (values: any) => {
    console.log(values);
    delete values.confirm_password;

    try {
      toast('Registring user')
      const response = await createUser(values);
      if (response) {
        toast.success("Signup Successful", { theme: "colored" });
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { errors, handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
      confirm_password: "",
    },
    onSubmit,
    validationSchema: signUpSchema,
  });

  return (
    <div className="w-[90%] ">
      <div className="   flex flex-col py-3 rounded-lg  gap-1 text-white">
        <h2 className="font-bold text-2xl ">Nice to meet you </h2>
        <div className="grid grid-cols-1 w-full md:space-x-2 ">
          <AuthFields
            name="name"
            value={values.name}
            onChange={handleChange}
            errors={errors.name}
            title="full name "
            placeholder="Enter your full name"
          />
        </div>{" "}
        <div className="grid md:grid-cols-2 grid-cols-1 w-full md:space-x-2 ">
          <AuthFields
            name="email"
            value={values.email}
            onChange={handleChange}
            errors={errors.email}
            title="Email address "
            placeholder="Enter your email"
          />
          <AuthFields
            name="password"
            value={values.password}
            onChange={handleChange}
            errors={errors.password}
            title="Password "
            placeholder="Enter your password"
          />
        </div>
        <AuthFields
          name="confirm_password"
          value={values.confirm_password}
          onChange={handleChange}
          errors={errors.confirm_password}
          title="Confirm Password "
          placeholder="Re-Enter your password"
        />
        <div className="mt-[2rem] flex flex-col gap-8">
        <CtaButton name="Register" action={handleSubmit} />
         
        </div>
     
      </div>
    </div>
  );
};

export default Register;
