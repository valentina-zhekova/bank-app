import { 
  TRANSACTION_CREATION_ADD_NEW, 
  TRANSACTION_CREATION_FILTER_SUGGESTIONS, 
  TRANSACTION_CREATION_SET_INPUT, 
  TRANSACTION_CREATION_SUBMIT_ERR
} from "../actions/actionTypes";

const transactionCreationReducer = (state, action) => {
  switch (action.type) {

  case TRANSACTION_CREATION_ADD_NEW:
    const paymentTypes = ["Card Payment", "Online Transfer", "Transaction"];
    const randomPayment = Math.floor(Math.random() * 3);

    return {
      ...state,
      transactions: state.transactions.concat({
        id: state.transactions.length + 1,
        date: new Date(),
        beneficiaryId: action.beneficiaryId,
        type: paymentTypes[randomPayment], // TODO common knowledge
        amount: action.amount,
        state: "Send" // TODO common knowledge
      }),
      submitTransactionErrHint: "",
    };

  case TRANSACTION_CREATION_SET_INPUT:
    return {
      ...state,
      [action.propNameInputValue]: action.newValue,
      [action.propNameErrHint]: "",
    };

  case TRANSACTION_CREATION_FILTER_SUGGESTIONS:
    const newState = {...state};
    newState[action.propNameSuggestions] = newState.accounts.filter(account => action.filter(account));
    return newState;
  
  case TRANSACTION_CREATION_SUBMIT_ERR:
    return {
      ...state,
      submitTransactionErrHint: "Invalid input. Cannot submit.",
    };
  
  default:
    return state;
  }
};

export default transactionCreationReducer;
