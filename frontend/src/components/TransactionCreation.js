import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CommonDropdown from "./CommonDropdown";
import CommonInput from "./CommonInput";
import { 
  transactionCreationAddNew, 
  transactionCreationFilterSuggestions, 
  transactionCreationSetInput,
  transactionCreationSubmitErr
} from "../actions/transactionCreationActions";
import { transactionsHisotryFilterSuggestions } from "../actions/transactionsHistoryActions";

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

  const filterSuggestions = (input, suggestion) => suggestion.name.toLowerCase().includes(input.toLowerCase());

  const submitTransactionErrHint = useSelector(state => state.submitTransactionErrHint);
  const fromAccount = useSelector(state => state.fromAccountInputValue);
  const toAccount = useSelector(state => state.toAccountInputValue);
  const amount = useSelector(state => state.amountInputValue);
  function isFormValid() {
    if (!accountNames.includes(fromAccount)) return false;
    if (!accountNames.includes(toAccount)) return false;
    if (isNaN(parseFloat(amount))) return false;

    return true;
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
            filter={input => dispatch(transactionCreationFilterSuggestions("fromAccountSuggestions", acc => filterSuggestions(input, acc)))}
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
            filter={input => dispatch(transactionCreationFilterSuggestions("toAccountSuggestions", acc => filterSuggestions(input, acc)))}
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

      <div>
        <button 
          onClick={() => {
            if (isFormValid()) {
              const relatedAccount = accounts.find(a => a.name === toAccount);
              dispatch(transactionCreationAddNew(relatedAccount.id, amount));
              dispatch(transactionsHisotryFilterSuggestions(() => true));
            } else {
              dispatch(transactionCreationSubmitErr()); // TODO dispatch warning
            }
          }}
        >
          Submit
        </button>
        <div>{submitTransactionErrHint}</div>
      </div>

    </div>
  );
};

export default TransactionCreation;
