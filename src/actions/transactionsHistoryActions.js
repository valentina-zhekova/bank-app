import { TRANSACTIONS_HISTORY_FILTER_SUGGESTIONS } from "./actionTypes";

const transactionsHisotryFilterSuggestions = (filter) => {
  return {
    type: TRANSACTIONS_HISTORY_FILTER_SUGGESTIONS,
    filter,
  };
};

export { transactionsHisotryFilterSuggestions };
