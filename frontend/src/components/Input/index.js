import React from "react";
import "./styles.css";

const Input = ({ placeholder, title, required = false, type, setValue }) => {
  console.log();

  return (
    <div>
      <label for={title}>
        {title}
        {required ? "*" : null}
      </label>
      <input
        id={title}
        name={title}
        placeholder={placeholder}
        type={type}
        required
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
