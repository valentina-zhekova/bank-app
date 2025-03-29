import React from "react";
import { useSelector } from "react-redux";
import CommonInput from "./CommonInput";

const ClientTransactionsHistory = () => {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; // TODO move to common

  const transactions = useSelector(state => state.transactions);
  const accounts = useSelector(state => state.accounts);

  function showClientTransactions() {
    return transactions.map(t => {
      const relatedAccount = accounts.filter(a => a.id === t.beneficiaryId)[0];

      return (
        <div key={t.id} style={{ display: "flex", flexDirection: "row", alignItems: "center", paddingBottom: 5 }}>
          <span style={{padding: 5}}>{monthNames[t.date.getMonth()]}</span>
          <span style={{padding: 5}}>{t.date.getDate()}</span>
          <img src={relatedAccount.thumbnail} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{padding: 5}}>{relatedAccount.name}</span>
            <span style={{padding: 5}}>{t.type}</span>
          </div>
          <span style={{padding: 5}}>-${t.amount}</span>
        </div>
      );
    });
  }

  return (
    <div style={{ backgroundColor: "LightGray" }}>
      <div style={{ backgroundColor: "DodgerBlue" }}><h3>Recent Transactions</h3></div>
      <CommonInput
        inputValueProp="historyInputValue"
        errHintProp="historyInputErrHint"
        demoValue="Search by typing..."
        validate={input => input == ""} // TODO: update logic
        errHint="No transaction record matches the criteria."
      />
      <div>
        {showClientTransactions()}
      </div>
    </div>
  );
};

export default ClientTransactionsHistory;
