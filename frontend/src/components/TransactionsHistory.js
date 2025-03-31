import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CommonInput from "./CommonInput";
import { transactionsHisotryFilterSuggestions, transactionsHisotryShowDetails } from "../actions/transactionsHistoryActions"; 

const TransactionsHistory = () => {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; // TODO move to common

  const dispatch = useDispatch();

  const transactions = useSelector(state => state.historySuggestions);
  const accounts = useSelector(state => state.accounts);

  function showClientTransactions() {
    return transactions.map(t => {
      const relatedAccount = accounts.find(a => a.id === t.beneficiaryId);

      return (
        <div 
          key={t.id}
          onClick={() => dispatch(transactionsHisotryShowDetails(t.id))} 
          style={{ display: "flex", flexDirection: "row", alignItems: "center", margin: 5, justifyContent: "space-around", border: "1px solid LightGrey" }}
        >
          <span style={{ flexBasis: "5%", padding: 5}}>{monthNames[t.date.getMonth()]}</span>
          <span style={{ flexBasis: "5%", padding: 5}}>{t.date.getDate()}</span>
          <img src={relatedAccount.img} alt="" />
          <div style={{ flexBasis: "60%", display: "flex", flexDirection: "column" }}>
            <span>{relatedAccount.name}</span>
            <span>{t.type}</span>
          </div>
          <span style={{flexBasis: "10%", padding: 5}}>-${t.amount}</span>
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
    <div className="sub-section">
      <div className="sub-section-header"><h3>Recent Transactions</h3></div>
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
