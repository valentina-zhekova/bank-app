import React from "react";
import { useSelector } from "react-redux";

const ClientTransactionDetails = ({ transactionId }) => {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; // TODO move to common

  const transactionStates = { // TODO move to common
    send: "Send",
    received: "Received",
    payed: "Payed"
  };

  const state = useSelector(state => state);
  const selectedTransaction = state.transactions.filter(t => t.id === transactionId)[0];
  const relatedAccount = state.accounts.filter(a => a.id === selectedTransaction.beneficiaryId)[0];
  console.log(111, selectedTransaction);

  return (
    <div style={{ backgroundColor: "LightGray" }}>
      <div style={{ backgroundColor: "DodgerBlue" }}><h3>Details for transaction {transactionId}</h3></div>
      <table><tbody>
        <tr><td>Amount</td><td>-${selectedTransaction.amount}</td></tr>
        <tr><td>date</td><td>{selectedTransaction.date.getDate()} {monthNames[selectedTransaction.date.getMonth()]} {selectedTransaction.date.getYear()}</td></tr>
        <tr><td>to contractor</td><td>{relatedAccount.name}</td></tr>
        <tr><td>State</td><td>{selectedTransaction.state}</td></tr>
      </tbody></table>

      <span>Change transaction state</span>
      <div class="dropdown">
        <button class="dropdown-holder" style={{ backgroundColor: "green" }}>{selectedTransaction.state}</button>
        <div class="dropdown-content" style={{ backgroundColor: "green" }}>
          <div>{transactionStates.send}</div>
          <div>{transactionStates.received}</div>
          <div>{transactionStates.payed}</div>
        </div>
      </div>
    </div>
  );
};

export default ClientTransactionDetails;
