import { TRANSACTION_DETAILS_CLOSE, TRANSACTION_DETAILS_UPDATE_STATE } from "./actionTypes";

const transactionDetailsClose = () => {
  return {
    type: TRANSACTION_DETAILS_CLOSE,
  };
};

const transactionDetailsUpdateState = (transactionId, newState) => {
  return {
    type: TRANSACTION_DETAILS_UPDATE_STATE,
    transactionId,
    newState,
  };
};

export { transactionDetailsClose, transactionDetailsUpdateState };
