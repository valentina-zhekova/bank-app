import { VALIDATION_ERROR, RESET_ERROR, UPDATE_VALUE } from "./actionTypes";

const validationError = () => {
  console.log("action validation");
  return {
    type: VALIDATION_ERROR,
  };
};

const resetError = () => {
  console.log("action reset");
  return {
    type: RESET_ERROR,
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
