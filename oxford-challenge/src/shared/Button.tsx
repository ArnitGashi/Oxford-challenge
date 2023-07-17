import React from "react";

type ButtonType = {
  colorClass: string;
  marginClass: string
  text: string
};

const Button = ({ colorClass, marginClass, text }: ButtonType): JSX.Element => {
  return (
    <button
      className={`py-[9px] px-[17px] ${colorClass} ${marginClass} text-white rounded-md`}
    >
      {text}
    </button>
  );
};

export default Button;
