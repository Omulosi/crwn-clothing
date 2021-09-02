import React from "react";

import {
  FormGroupContainer,
  FormInputContainer,
  FormInputLabelContainer,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...props }) => {
  return (
    <FormGroupContainer>
      <FormInputContainer onChange={handleChange} {...props} />
      {label && (
        <FormInputLabelContainer {...props}>{label}</FormInputLabelContainer>
      )}
    </FormGroupContainer>
  );
};

export default FormInput;
