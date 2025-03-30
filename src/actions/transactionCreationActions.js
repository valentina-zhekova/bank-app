import { TRANSACTION_CREATION_SET_INPUT } from "./actionTypes";

const transactionCreationSetInput = (propNameInputValue, newValue) => {
  return {
    type: TRANSACTION_CREATION_SET_INPUT,
    propNameInputValue, 
    newValue,
  };
};

export { transactionCreationSetInput };
