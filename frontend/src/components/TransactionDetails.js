import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { transactionDetailsClose, transactionDetailsUpdateState } from '../actions/transactionDetailsActions';
import CommonDropdown from "./CommonDropdown";

const TransactionDetails = ({ transactionId }) => {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; // TODO move to common

  const transactionStates = { // TODO move to common
    send: "Send",
    received: "Received",
    payed: "Payed"
  };

  const dispatch = useDispatch();

  const transactions = useSelector(state => state.transactions);
  const selectedTransaction = transactions.find(t => t.id === transactionId);
  const accounts = useSelector(state => state.accounts);
  const relatedAccount = accounts.find(a => a.id === selectedTransaction.beneficiaryId);

  return (
    <div className="sub-section">
      <div className="sub-section-header">
        <h3>Details for transaction {transactionId}</h3>
        <button onClick={() => dispatch(transactionDetailsClose())}>Close</button>
      </div>
      <table><tbody>
        <tr><td>Amount</td><td>-${selectedTransaction.amount}</td></tr>
        <tr><td>date</td><td>{selectedTransaction.date.getDate()} {monthNames[selectedTransaction.date.getMonth()]} {selectedTransaction.date.getYear()}</td></tr>
        <tr><td>to contractor</td><td>{relatedAccount.name}</td></tr>
        <tr><td>State</td><td>{selectedTransaction.state}</td></tr>
      </tbody></table>

      <span>Change transaction state</span>
      <CommonDropdown
        dropdownSubject={<button>{selectedTransaction.state}</button>}
        dropdownOptions={[transactionStates.send, transactionStates.received, transactionStates.payed]}
        handleClick={newState => dispatch(transactionDetailsUpdateState(transactionId, newState))}
      />

    </div>
  );
};

export default TransactionDetails;
