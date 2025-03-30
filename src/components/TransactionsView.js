import React from "react";
import { useSelector } from "react-redux";
import TransactionDetails from './TransactionDetails';
import TransactionsHistory from './TransactionsHistory';

const TransactionsView = () => {
  const selectedTransactionId = useSelector(state => state.selectedTransactionId);

  return (
    <div>{ selectedTransactionId ? <TransactionDetails transactionId={1} /> : <TransactionsHistory />}</div>
  );
}

export default TransactionsView;
