import { TRANSACTIONS_HISTORY_FILTER_SUGGESTIONS, TRANSACTIONS_HISTORY_SHOW_DETAILS } from "./actionTypes";

const transactionsHisotryFilterSuggestions = (filter) => {
  return {
    type: TRANSACTIONS_HISTORY_FILTER_SUGGESTIONS,
    filter,
  };
};

const transactionsHisotryShowDetails = (transactionId) => {
  return {
    type: TRANSACTIONS_HISTORY_SHOW_DETAILS,
    transactionId,
  };
};

export { transactionsHisotryFilterSuggestions, transactionsHisotryShowDetails };
