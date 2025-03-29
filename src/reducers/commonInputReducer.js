import { INPUT_UPDATE_VALUE, INPUT_RISE_ERROR, INPUT_RESET_ERROR } from "../actions/actionTypes";

const commonInputReducer = (state, action) => {
  switch (action.type) {

    case INPUT_UPDATE_VALUE:
      return {
        ...state,
        [action.inputValueProp]: action.newValue,
      };

    case INPUT_RISE_ERROR:
      return {
        ...state,
        [action.errHintProp]: "No integers allowed",
      };

    case INPUT_RESET_ERROR:
      return {
        ...state,
        [action.errHintProp]: "",
      };

    default:
      return state;
  }
};

export default commonInputReducer;
