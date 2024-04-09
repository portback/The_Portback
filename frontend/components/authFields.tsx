import React, { ChangeEvent, FC } from "react";

interface AuthFieldsI {
  title?: string;
  placeholder: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent) => void;
  errors: string | undefined;
}

const AuthFields: FC<AuthFieldsI> = ({

  placeholder,
  type,
  name,
  value,
  onChange,
  errors,
}) => {
  return (
    <div className="w-full flex flex-col ">
      <input
        type="text"
        className="w-full bg-[#343A40] border-[#1C2541] border-[1px] text-[#ADB5BD] outline-none rounded-lg py-2 px-3"
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
