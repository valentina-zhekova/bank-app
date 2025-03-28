import React from "react";
import { useSelector } from "react-redux";

const ClientTransactionCreation = () => {
  const accounts = useSelector(state => state.accounts); // TODO: provide as options later
  
  const accountNameToId = new Map();
  for (let account of accounts) {
    accountNameToId.set(account.name, account.id);
  }

  const accountNames = accounts.map(a => a.name);

  return (
    <div style={{ backgroundColor: "LightGray"}}>
      <div style={{ backgroundColor: "DodgerBlue"}}><h3>Make a Transfer</h3></div>

      <p>FROM ACCOUNT</p>
      <div class="dropdown">
        <input class="dropdown-holder" defaultValue="Free Checking(4692) - $5824 76" />
        <div class="dropdown-content" style={{ backgroundColor: "green" }}>
          { accountNames.map(a => <div>{a}</div>) }
        </div>
      </div>

      <p>TO ACCOUNT</p>
      <div class="dropdown">
        <input class="dropdown-holder" defaultValue="Georgia Power Electric Company"/>
        <div class="dropdown-content" style={{ backgroundColor: "green" }}>
          { accountNames.map(a => <div>{a}</div>) }
        </div>
      </div>

      <p>AMOUNT</p>
      <div><input defaultValue="$ 0.00"/></div>
      <button>Submit</button>

    </div>
  );
};

export default ClientTransactionCreation;
