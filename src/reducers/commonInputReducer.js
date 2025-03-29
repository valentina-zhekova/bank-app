import { VALIDATION_ERROR, RESET_ERROR, UPDATE_VALUE } from "../actions/actionTypes";

const commonInputReducer = (state, action) => {
  console.log("REDUCER", action);
  switch (action.type) {
    case VALIDATION_ERROR:
      console.log("reducer validation");
      return {
        ...state,
        errorMsg: "No integers allowed",
        inputValue: action.payload,
      };
    case RESET_ERROR:
      console.log("reducer reset");
      return {
        ...state,
        errorMsg: "",
        inputValue: action.payload,
      };
    case UPDATE_VALUE:
      console.log("reducer update");
      return {
        ...state,
        inputValue: action.payload,
      };
    default:
      return state;
  }
};

export default commonInputReducer;
