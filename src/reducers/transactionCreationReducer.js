import { TRANSACTION_CREATION_FILTER_SUGGESTIONS, TRANSACTION_CREATION_SET_INPUT } from "../actions/actionTypes";

const transactionCreationReducer = (state, action) => {
  switch (action.type) {

  case TRANSACTION_CREATION_SET_INPUT:
    return {
      ...state,
      [action.propNameInputValue]: action.newValue,
      [action.propNameErrHint]: "",
    };

  case TRANSACTION_CREATION_FILTER_SUGGESTIONS:
    const newState = {...state};
    newState[action.propNameSuggestions] = newState.accounts.filter(account => action.filter(account))
    return newState;
  
  default:
    return state;
  }
};

export default transactionCreationReducer;
