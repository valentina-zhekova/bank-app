import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CommonDropdown from "./CommonDropdown";
import CommonInput from "./CommonInput";
import { transactionCreationFilterSuggestions, transactionCreationSetInput } from "../actions/transactionCreationActions";

const TransactionCreation = () => {
  const dispatch = useDispatch();

  const accounts = useSelector(state => state.accounts); // TODO: provide as options later
  let fromAccounts = useSelector(state => state.fromAccountSuggestions);
  let toAccounts = useSelector(state => state.toAccountSuggestions);
  
  const accountNameToId = new Map();
  for (let account of accounts) {
    accountNameToId.set(account.name, account.id);
  }

  const accountNames = accounts.map(a => a.name);

  function filterAccountSuggestions(suggestions, event) {
    const inputValue = event.target.value;
    if (inputValue === "") {
      suggestions = accounts;
    } else {
      suggestions = suggestions.filter(suggestion => suggestion.name.toLowerCase().includes(inputValue.toLowerCase()));
    }
  }

  return (
    <div style={{ backgroundColor: "LightGray"}}>
      <div style={{ backgroundColor: "DodgerBlue"}}><h3>Make a Transfer</h3></div>

      <p>FROM ACCOUNT</p>
      <CommonDropdown
        dropdownSubject={
          <CommonInput
            inputValueProp="fromAccountInputValue"
            errHintProp="fromAccountInputErrHint"
            demoValue="Free Checking(4692) - $5824 76"
            validate={input => input === "" || accountNames.includes(input)} 
            errHint="Such account doesn't exist"
            filter={input => {
              const filterSuggestions = (i, a) => a.name.toLowerCase().includes(i.toLowerCase());
              dispatch(transactionCreationFilterSuggestions("fromAccountSuggestions", acc => filterSuggestions(input, acc)))
            }}
          />
        }
        dropdownOptions={fromAccounts.map(a => a.name)}
        handleClick={selectedAccount => dispatch(transactionCreationSetInput("fromAccountInputValue", "fromAccountInputErrHint", selectedAccount))}
      />

      <p>TO ACCOUNT</p>
      <CommonDropdown
        dropdownSubject={
          <CommonInput
            inputValueProp="toAccountInputValue"
            errHintProp="toAccountInputErrHint"
            demoValue="Georgia Power Electric Company"
            validate={input => input === "" || accountNames.includes(input)} 
            errHint="Such account doesn't exist"
          />
        }
        dropdownOptions={toAccounts.map(a => a.name)}
        handleClick={selectedAccount => dispatch(transactionCreationSetInput("toAccountInputValue", "toAccountInputErrHint", selectedAccount))}
      />

      <p>AMOUNT</p>
      <CommonInput
        inputValueProp="amountInputValue"
        errHintProp="amountInputErrHint"
        demoValue="$ 0.00"
        validate={input => input === "" || /^\d*\.?\d\d?$/.test(input)}
        errHint="The value should be a number." 
      />

      <button>Submit</button>

    </div>
  );
};

export default TransactionCreation;
