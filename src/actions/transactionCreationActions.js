import { 
  TRANSACTION_CREATION_ADD_NEW, 
  TRANSACTION_CREATION_FILTER_SUGGESTIONS, 
  TRANSACTION_CREATION_SET_INPUT,
  TRANSACTION_CREATION_SUBMIT_ERR
} from "./actionTypes";

const transactionCreationAddNew = (beneficiaryId, amount) => {
  return {
    type: TRANSACTION_CREATION_ADD_NEW,
    beneficiaryId,
    amount,
  };
};

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

const transactionCreationSubmitErr = () => {
  return {
    type: TRANSACTION_CREATION_SUBMIT_ERR,
  };
}

export { 
  transactionCreationAddNew, 
  transactionCreationFilterSuggestions, 
  transactionCreationSetInput, 
  transactionCreationSubmitErr
};
