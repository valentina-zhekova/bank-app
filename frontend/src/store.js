import { createStore } from "redux";
import { 
  INPUT_RESET_ERROR, 
  INPUT_UPDATE_VALUE, 
  INPUT_RISE_ERROR,
  LOAD_ACCOUNTS,
  LOAD_TRANSACTIONS,
  TRANSACTION_CREATION_ADD_NEW,
  TRANSACTION_CREATION_FILTER_SUGGESTIONS,
  TRANSACTION_CREATION_SET_INPUT,
  TRANSACTION_CREATION_SUBMIT_ERR,
  TRANSACTION_DETAILS_CLOSE,
  TRANSACTION_DETAILS_UPDATE_STATE,
  TRANSACTIONS_HISTORY_FILTER_SUGGESTIONS,
  TRANSACTIONS_HISTORY_SHOW_DETAILS,
} from "./actions/actionTypes";
import commonInputReducer from "./reducers/commonInputReducer";
import transactionCreationReducer from "./reducers/transactionCreationReducer";
import transactionDetailsReducer from "./reducers/transactionDetailsReducer";
import transactionsHistoryReducer from "./reducers/transactionsHistoryReducer";

const initialState = {
  accounts: [],
  transactions: [],
  selectedTransactionId: null,
  submitTransactionErrHint: "",
  fromAccountInputValue: "",
  fromAccountInputErrHint: "",
  toAccountInputValue: "",
  toAccountInputErrHint: "",
  amountInputValue: "",
  amountInputErrHint: "",
  historyInputValue: "",
  historyInputErrHint: "",
  fromAccountSuggestions: [],
  toAccountSuggestions: [],
  historySuggestions: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_UPDATE_VALUE:
    case INPUT_RISE_ERROR:
    case INPUT_RESET_ERROR:
      return commonInputReducer(state, action);
    case LOAD_ACCOUNTS:
      return {
        ...state,
        accounts: action.accounts,
        fromAccountSuggestions: action.accounts,
        toAccountSuggestions: action.accounts,
      };
    case LOAD_TRANSACTIONS:
      for (let t of action.transactions) {
        t.date = new Date(t.date);
      }
      return {
        ...state,
        transactions: action.transactions,
        historySuggestions: action.transactions,
      };
    case TRANSACTION_CREATION_ADD_NEW:
    case TRANSACTION_CREATION_FILTER_SUGGESTIONS:
    case TRANSACTION_CREATION_SET_INPUT:
    case TRANSACTION_CREATION_SUBMIT_ERR:
      return transactionCreationReducer(state, action);
    case TRANSACTION_DETAILS_CLOSE:
    case TRANSACTION_DETAILS_UPDATE_STATE:
      return transactionDetailsReducer(state, action);
    case TRANSACTIONS_HISTORY_FILTER_SUGGESTIONS:
    case TRANSACTIONS_HISTORY_SHOW_DETAILS:
      return transactionsHistoryReducer(state, action);
    default:
      return state;
  }
}

const store = createStore(rootReducer);

fetch('/accounts')
  .then(res => res.json())
  .then(accounts => store.dispatch({
    type: LOAD_ACCOUNTS,
    accounts,
  })
);
    
fetch('/transactions')
  .then(res => res.json())
  .then(transactions => store.dispatch({
    type: LOAD_TRANSACTIONS,
    transactions,
  })
);

export default store;
