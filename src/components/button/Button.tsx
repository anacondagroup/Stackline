import React from "react";
import "./styles.scss";

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
