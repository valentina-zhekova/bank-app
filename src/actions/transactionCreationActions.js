import { TRANSACTION_CREATION_FILTER_SUGGESTIONS, TRANSACTION_CREATION_SET_INPUT } from "./actionTypes";

const transactionCreationFilterSuggestions = (propNameSuggestions, filter) => {
  return {
    type: TRANSACTION_CREATION_FILTER_SUGGESTIONS,
    propNameSuggestions,
    filter,
  };
};

const transactionCreationSetInput = (propNameInputValue, propNameErrHint, newValue) => {
  return {
    type: TRANSACTION_CREATION_SET_INPUT,
    propNameInputValue,
    propNameErrHint,
    newValue,
  };
};

export { transactionCreationFilterSuggestions, transactionCreationSetInput };
