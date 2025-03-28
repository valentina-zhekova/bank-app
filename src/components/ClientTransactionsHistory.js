import React from "react";
import { useSelector } from "react-redux";

const ClientTransactionsHistory = () => {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; // TODO move to common

  const transactions = useSelector(state => state.transactions);

  function showClientTransactions() {
    return transactions.map((t, i) =>
        <div key={i} style={{ display: "flex", flexDirection: "row", alignItems: "center", paddingBottom: 5 }}>
            <span style={{padding: 5}}>{monthNames[t.date.getMonth()]}</span>
            <span style={{padding: 5}}>{t.date.getDate()}</span>
            <img src={t.thumbnail}/>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{padding: 5}}>{t.beneficiary}</span>
              <span style={{padding: 5}}>{t.type}</span>
            </div>
            <span style={{padding: 5}}>-${t.amount}</span>
        </div>
    );
  }

  return (
    <div style={{ backgroundColor: "LightGray" }}>
      <div style={{ backgroundColor: "DodgerBlue" }}><h3>Recent Transactions</h3></div>
      <div>
        {showClientTransactions()}
      </div>
    </div>
  );
};

export default ClientTransactionsHistory;
