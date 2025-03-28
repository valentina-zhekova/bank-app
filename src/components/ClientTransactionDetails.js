import React from "react";
import { useSelector } from "react-redux";

const ClientTransactionDetails = ({ transactionId }) => {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; // TODO move to common

  const transactionStates = { // TODO move to common
    send: "Send",
    received: "Received",
    payed: "Payed"
  };

  const transactions = useSelector(state => state.transactions);
  const selectedTransaction = transactions[transactionId];

  return (
    <div style={{ backgroundColor: "LightGray" }}>
      <div style={{ backgroundColor: "DodgerBlue" }}><h3>Details for transaction {transactionId + 1}</h3></div>
      <table><tbody>
        <tr><td>Amount</td><td>-${selectedTransaction.amount}</td></tr>
        <tr><td>date</td><td>{selectedTransaction.date.getDate()} {monthNames[selectedTransaction.date.getMonth()]} {selectedTransaction.date.getYear()}</td></tr>
        <tr><td>to contractor</td><td>{selectedTransaction.beneficiary}</td></tr>
        <tr><td>State</td><td>{selectedTransaction.state}</td></tr>
      </tbody></table>

      <span>Change transaction state</span>
      <div class="dropdown">
        <button class="dropbtn" style={{ backgroundColor: "green" }}>{selectedTransaction.state}</button>
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
