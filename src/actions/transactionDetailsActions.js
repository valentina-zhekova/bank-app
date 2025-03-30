import { TRANSACTION_DETAILS_UPDATE_STATE } from "./actionTypes";

const transactionDetailsUpdateState = (transactionId, newState) => {
  return {
    type: TRANSACTION_DETAILS_UPDATE_STATE,
    transactionId,
    newState,
  };
};

export { transactionDetailsUpdateState };
