import { VALIDATION_ERROR, RESET_ERROR, UPDATE_VALUE } from "../actions/actionTypes";

// const initialState = {
//   numOfItems: 0,
// };

const commonInputReducer = (state, action) => {
  switch (action.type) {
    case VALIDATION_ERROR:
      console.log("reducer validation");
      return {
        ...state,
        errorMsg: "No integers allowed",
      };
    case RESET_ERROR:
      console.log("reducer reset");
      return {
        ...state,
        errorMsg: "",
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
