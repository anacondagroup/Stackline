import React from "react";

interface ButtonProp {
  label: string;
}

export const Button = ({ label }: ButtonProp) => {
  return (
    <>
      <div className="button-container">{label}</div>
    </>
  );
};
