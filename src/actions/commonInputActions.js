import { VALIDATION_ERROR, RESET_ERROR, UPDATE_VALUE } from "./actionTypes";

const validationError = (val) => {
  console.log("action validation", val);
  return {
    type: VALIDATION_ERROR,
    payload: val
  };
};

const resetError = (val) => {
  console.log("action reset");
  return {
    type: RESET_ERROR,
    payload: val
  };
};

const updateValue = (val) => {
  console.log("action update");
  return {
    type: UPDATE_VALUE,
    payload: val
  };
};

export { validationError, resetError, updateValue };
