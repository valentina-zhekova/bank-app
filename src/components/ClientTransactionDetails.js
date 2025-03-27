import React from "react";

const ClientTransactionDetails = () => {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const paymentTypes = {
    card: "Card Payment",
    online: "Online Transfer",
    transaction: "Transaction"
  };

  const transactionStates = {
    send: "Send",
    received: "Received",
    payed: "Payed"
  };

  const mockTransaction = {
    id: 1,
    state: transactionStates.payed,
    date: new Date(2024, 9, 19), 
    thumbnail: "defaultThumb.png", 
    beneficiary: "The Tea Lounge", 
    type: paymentTypes.card, 
    amount: 82.02
  };

  return (
    <div style={{ backgroundColor: "LightGray" }}>
      <div style={{ backgroundColor: "DodgerBlue" }}><h3>Details for transaction {mockTransaction.id}</h3></div>
      <table><tbody>
        <tr><td>Amount</td><td>-${mockTransaction.amount}</td></tr>
        <tr><td>date</td><td>{mockTransaction.date.getDate()} {monthNames[mockTransaction.date.getMonth()]} {mockTransaction.date.getYear()}</td></tr>
        <tr><td>to contractor</td><td>{mockTransaction.beneficiary}</td></tr>
        <tr><td>State</td><td>{mockTransaction.state}</td></tr>
      </tbody></table>

      <span>Change transaction state</span>
      <div class="dropdown">
        <button class="dropbtn" style={{ backgroundColor: "green" }}>{mockTransaction.state}</button>
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
