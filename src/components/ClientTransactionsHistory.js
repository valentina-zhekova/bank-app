import React from "react";

const ClientTransactionsHistory = () => {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const paymentTypes = {
    card: "Card Payment",
    online: "Online Transfer",
    transaction: "Transaction"
  };

  const transactions = [
    { date: new Date(2024, 9, 19), thumbnail: "defaultThumb.png", beneficiary: "The Tea Lounge", type: paymentTypes.card, amount: 82.02 },
    { date: new Date(2024, 9, 19), thumbnail: "defaultThumb.png", beneficiary: "Texaco", type: paymentTypes.card, amount: 84.64 },
    { date: new Date(2024, 9, 18), thumbnail: "defaultThumb.png", beneficiary: "The Tea Lounge", type: paymentTypes.card, amount: 84.76 },
    { date: new Date(2024, 9, 18), thumbnail: "defaultThumb.png", beneficiary: "Amazon Online Store", type: paymentTypes.online, amount: 22.10 },
    { date: new Date(2024, 9, 18), thumbnail: "defaultThumb.png", beneficiary: "7-Eleven", type: paymentTypes.card, amount: 46.25 },
    { date: new Date(2024, 9, 17), thumbnail: "defaultThumb.png", beneficiary: "H&M Online Store", type: paymentTypes.online, amount: 19.72 },
    { date: new Date(2024, 9, 16), thumbnail: "defaultThumb.png", beneficiary: "Jerry Hildreth", type: paymentTypes.transaction, amount: 68.87 },
    { date: new Date(2024, 9, 15), thumbnail: "defaultThumb.png", beneficiary: "Lawrance Pearson", type: paymentTypes.transaction, amount: 52.36 },
    { date: new Date(2024, 9, 15), thumbnail: "defaultThumb.png", beneficiary: "Whole Foods", type: paymentTypes.card, amount: 75.93 },
    { date: new Date(2024, 9, 14), thumbnail: "defaultThumb.png", beneficiary: "Southern Electric Company", type: paymentTypes.online, amount: 142.95 },
  ];

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
