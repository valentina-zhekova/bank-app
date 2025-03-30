import React from "react";
import { useSelector } from "react-redux";
import CommonInput from "./CommonInput";

const ClientTransactionCreation = () => {
  const accounts = useSelector(state => state.accounts); // TODO: provide as options later
  let fromAccounts = accounts;
  let toAccounts = accounts;
  
  const accountNameToId = new Map();
  for (let account of accounts) {
    accountNameToId.set(account.name, account.id);
  }

  const accountNames = accounts.map(a => a.name);

  function filterAccountSuggestions(suggestions, event) {
    const inputValue = event.target.value;
    if (inputValue == "") {
      suggestions = accounts;
    } else {
      suggestions = suggestions.filter(suggestion => suggestion.name.toLowerCase().includes(inputValue.toLowerCase()));
    }
  }

  // const [inputValue, setInputValue] = useState("")

  return (
    <div style={{ backgroundColor: "LightGray"}}>
      <div style={{ backgroundColor: "DodgerBlue"}}><h3>Make a Transfer</h3></div>

      <p>FROM ACCOUNT</p>
      {/* <div className="dropdown">
        <input 
          className="dropdown-holder"
          type="text"
          placeholder="Free Checking(4692) - $5824 76"
          value={inputValue}
          // onChange={event => filterAccountSuggestions(fromAccounts, event)} 
          onChange={e => setInputValue(e.target.value)}
        />
        <div className="dropdown-content" style={{ backgroundColor: "green" }}>
          { fromAccounts.map(a => <div key={a.id}>{a.name}</div>) }
          { fromAccounts.map(a => {
            const isMatch = a.indexOf(inputValue) > -1;
            return (<div key={a.id}>{isMatch && <div>{a.name}</div>}</div>);
          }) }
        </div>
      </div> */}
      <CommonInput
        inputValueProp="fromAccountInputValue"
        errHintProp="fromAccountInputErrHint"
        demoValue="Free Checking(4692) - $5824 76"
        validate={input => input == "" || accountNames.includes(input)} 
        errHint="Such account doesn't exist"
      />

      <p>TO ACCOUNT</p>
      {/* <div className="dropdown">
        <input className="dropdown-holder" placeholder="Georgia Power Electric Company"/>
        <div className="dropdown-content" style={{ backgroundColor: "green" }}>
          { toAccounts.map(a => <div key={a.id}>{a.name}</div>) }
        </div>
      </div> */}
      <CommonInput
        inputValueProp="toAccountInputValue"
        errHintProp="toAccountInputErrHint"
        demoValue="Georgia Power Electric Company"
        validate={input => input == "" || accountNames.includes(input)}
        errHint="Such account doesn't exist."
      />

      <p>AMOUNT</p>
      <CommonInput
        inputValueProp="amountInputValue"
        errHintProp="amountInputErrHint"
        demoValue="$ 0.00"
        validate={input => input == "" || /^\d*\.?\d\d?$/.test(input)}
        errHint="The value should be a number." 
      />

      <button>Submit</button>

    </div>
  );
};

export default ClientTransactionCreation;
