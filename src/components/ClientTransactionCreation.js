import React from "react";

const ClientTransactionCreation = () => {
  return (
    <div style={{"backgroundColor": "LightGray"}}>
      <div style={{"backgroundColor": "DodgerBlue"}}><h3>Make a Transfer</h3></div>
      <p>FROM ACCOUNT</p>
      <div><input defaultValue="Free Checking(4692) - $5824 76"/></div>
      <p>TO ACCOUNT</p>
      <div><input defaultValue="Georgia Power Electric Company"/></div>
      <p>AMOUNT</p>
      <div><input defaultValue="$ 0.00"/></div>
      <button>Submit</button>
    </div>
  );
};

export default ClientTransactionCreation;
