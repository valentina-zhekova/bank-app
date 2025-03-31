import { TRANSACTIONS_HISTORY_FILTER_SUGGESTIONS, TRANSACTIONS_HISTORY_SHOW_DETAILS } from "../actions/actionTypes";

const transactionsHistoryReducer = (state, action) => {
  switch (action.type) {

  case TRANSACTIONS_HISTORY_FILTER_SUGGESTIONS:
    const newState = {...state};
    newState.historySuggestions = newState.transactions.filter(transaction => action.filter(transaction))
    return newState;

  case TRANSACTIONS_HISTORY_SHOW_DETAILS:
    return {
      ...state,
      selectedTransactionId: action.transactionId
    };
  
  default:
    return state;
  }
};

export default transactionsHistoryReducer;
