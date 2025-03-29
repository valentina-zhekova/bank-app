import { INPUT_UPDATE_VALUE, INPUT_RISE_ERROR, INPUT_RESET_ERROR } from "./actionTypes";

const inputUpdateValue = (inputValueProp, newValue) => {
  return {
    type: INPUT_UPDATE_VALUE,
    inputValueProp,
    newValue,
  };
};

const inputRiseError = (errHintProp, errHint) => {
  return {
    type: INPUT_RISE_ERROR,
    errHintProp,
    errHint,
  };
};

const inputResetError = (errHintProp) => {
  return {
    type: INPUT_RESET_ERROR,
    errHintProp,
  };
};

export { inputUpdateValue, inputRiseError, inputResetError };
