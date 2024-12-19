import React from "react";

interface FormProps {
  label: string;
  type: "inline" | "online";
}

export const Form = (props: FormProps) => {
  const {label, type } = props;

  return (
    <form  className={`form-${type}`}>
      <label htmlFor="input-field">{label}</label>
      <input id="input-field" type="text" placeholder="Enter text here" />
    </form>
  );
};
