import { TRANSACTION_CREATION_SET_INPUT } from "../actions/actionTypes";

const transactionCreationReducer = (state, action) => {
  switch (action.type) {

  case TRANSACTION_CREATION_SET_INPUT:
    console.log(111, action);
    return {
      ...state,
      [action.propNameInputValue]: action.newValue,
    };

    default:
      return state;
  }
};

export default transactionCreationReducer;
