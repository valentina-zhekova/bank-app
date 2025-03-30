import { TRANSACTION_CREATION_SET_INPUT } from "./actionTypes";

const transactionCreationSetInput = (propNameInputValue, propNameErrHint, newValue) => {
  return {
    type: TRANSACTION_CREATION_SET_INPUT,
    propNameInputValue,
    propNameErrHint,
    newValue,
  };
};

export { transactionCreationSetInput };
