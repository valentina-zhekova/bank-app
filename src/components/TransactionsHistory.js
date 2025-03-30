import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CommonInput from "./CommonInput";
import { transactionsHisotryFilterSuggestions } from "../actions/transactionsHistoryActions"; 

const TransactionsHistory = () => {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; // TODO move to common

  const dispatch = useDispatch();

  const transactions = useSelector(state => state.historySuggestions);
  const accounts = useSelector(state => state.accounts);

  function showClientTransactions() {
    return transactions.map(t => {
      const relatedAccount = accounts.find(a => a.id === t.beneficiaryId);

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

  const filterSuggestions = (input, suggestion) => {
    const relatedAccount = accounts.find(a => a.id === suggestion.beneficiaryId);

    return (
      monthNames[suggestion.date.getMonth()].toLowerCase().includes(input.toLowerCase()) ||
      suggestion.date.getDate().toString().toLowerCase().includes(input.toLowerCase()) ||
      relatedAccount.name.toLowerCase().includes(input.toLowerCase()) ||
      suggestion.type.toLowerCase().includes(input.toLowerCase()) ||
      suggestion.amount.toString().toLowerCase().includes(input.toLowerCase()) ||
      suggestion.state.toLowerCase().includes(input.toLowerCase())
    );
  };

  return (
    <div style={{ backgroundColor: "LightGray" }}>
      <div style={{ backgroundColor: "DodgerBlue" }}><h3>Recent Transactions</h3></div>
      <CommonInput
        inputValueProp="historyInputValue"
        errHintProp="historyInputErrHint"
        demoValue="Search by typing..."
        validate={input => input === "" || transactions.some(t => filterSuggestions(input, t)) }
        errHint="No transaction record matches the criteria."
        filter={input => dispatch(transactionsHisotryFilterSuggestions(tran => filterSuggestions(input, tran)))}
      />
      <div>
        {showClientTransactions()}
      </div>
    </div>
  );
};

export default TransactionsHistory;
