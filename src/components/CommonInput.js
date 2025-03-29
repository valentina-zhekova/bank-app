import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { inputUpdateValue, inputRiseError, inputResetError } from "../actions/commonInputActions";

const CommonInput = ({ inputValueProp, errHintProp, demoValue = "", validate, errHint }) => {
  const dispatch = useDispatch();

  const inputValue = useSelector(state => state[inputValueProp]);
  const errorHint = useSelector(state => state[errHintProp]);

  const noValidationError = errorHint == ""; // TODO: isEmpty() util

  function handleChange(input) {
    const isValid = validate(input);

    if (noValidationError && !isValid) {
      dispatch(inputRiseError(errHintProp, errHint));
    } else if (!noValidationError && isValid) {
      dispatch(inputResetError(errHintProp));
    }

    dispatch(inputUpdateValue(inputValueProp, input));
  }

  return (
    <div>
      <input 
        placeholder={demoValue} 
        value={inputValue}
        onChange={event => handleChange(event.target.value)}
      />
      <div>{errorHint}</div>
    </div>
  );
};

export default CommonInput;
