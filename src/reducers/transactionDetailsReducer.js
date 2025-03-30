import { TRANSACTION_DETAILS_CLOSE, TRANSACTION_DETAILS_UPDATE_STATE } from "../actions/actionTypes";

const transactionDetailsReducer = (state, action) => {
  switch (action.type) {

    case TRANSACTION_DETAILS_CLOSE:
      return {
        ...state,
        selectedTransactionId: null,
      };

    case TRANSACTION_DETAILS_UPDATE_STATE:
      const newState = {...state, transactions: [...state.transactions]};
      const transactionToUpdate = newState.transactions.find(t => t.id === action.transactionId);
      transactionToUpdate.state = action.newState;
      return newState;

    default:
      return state;
  }
};

export default transactionDetailsReducer;
