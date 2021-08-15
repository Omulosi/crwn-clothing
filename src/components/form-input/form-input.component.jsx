import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : "" // shrink whenever user types anything in
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
