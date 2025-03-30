import { TRANSACTIONS_HISTORY_FILTER_SUGGESTIONS } from "../actions/actionTypes";

const transactionsHistoryReducer = (state, action) => {
  switch (action.type) {

  case TRANSACTIONS_HISTORY_FILTER_SUGGESTIONS:
    const newState = {...state};
    newState.historySuggestions = newState.transactions.filter(transaction => action.filter(transaction))
    return newState;
  
  default:
    return state;
  }
};

export default transactionsHistoryReducer;
