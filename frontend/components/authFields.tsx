import React, { ChangeEvent, FC } from "react";

interface AuthFieldsI {
  title: string;
  placeholder: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent) => void;
  errors: string | undefined;
}

const AuthFields: FC<AuthFieldsI> = ({
  title,
  placeholder,
  type,
  name,
  value,
  onChange,
  errors,
}) => {
  return (
    <div className="w-full flex flex-col gap-2 py-2">
      <p className="font-sans text-xl font-bold capitalize text-white">
        {title}
      </p>
      <input
        type="text"
        className="w-full bg-[#D9D9D977] border-none outline-none rounded-lg py-2 px-3"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {errors && <p className="text-red-500">{errors}</p>}
    </div>
  );
};

export default AuthFields;
