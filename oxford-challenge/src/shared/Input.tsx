import React from "react";

type InputType = {
  type: string;
  placeholder: string;
};

const Input = ({ type, placeholder }: InputType) => {
  return (
    <input
      className="w-[446px] pl-[16px] py-[12px] text-gray-50 border border-gray-50 rounded-md outline-none"
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
