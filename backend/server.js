const express = require('express');
const app = express();
const port = 7000;

const paymentTypes = {
  card: "Card Payment",
  online: "Online Transfer",
  transaction: "Transaction"
};

const transactionStates = { // TODO move to common
  send: "Send",
  received: "Received",
  payed: "Payed"
};

app.get('/', (req, res) => {
  res.send("API:" +
    "<br><br>/accounts <br>-> returns list of all registered accounts; <br>-> return type: [{id, name, img}]" +
    "<br><br>/transactions <br>-> returns list of the predefined transactions; <br>-> return type: [{id, date, beneficiaryId, type, amount, state}]"
  );
});

app.get('/accounts', (req, res) => {
  const accounts = [
    { id: 1, name: "The Tea Lounge", img: "defaultThumb.png" },
    { id: 2, name: "Texaco", img: "defaultThumb.png" },
    { id: 3, name: "Amazon Online Store", img: "defaultThumb.png" },
    { id: 4, name: "7-Eleven", img: "defaultThumb.png" },
    { id: 5, name: "H&M Online Store", img: "defaultThumb.png" },
    { id: 6, name: "Jerry Hildreth", img: "defaultThumb.png" },
    { id: 7, name: "Lawrance Pearson", img: "defaultThumb.png" },
    { id: 8, name: "Whole Foods", img: "defaultThumb.png" },
    { id: 9, name: "Southern Electric Company", img: "defaultThumb.png" }
  ];
  
  res.json(accounts);
});

app.get('/transactions', (req, res) => {
  const transactions = [
    { id: 1, date: new Date(2024, 9, 19), beneficiaryId: 1, type: paymentTypes.card, amount: 82.02, state: transactionStates.payed },
    { id: 2, date: new Date(2024, 9, 19), beneficiaryId: 2, type: paymentTypes.card, amount: 84.64, state: transactionStates.send },
    { id: 3, date: new Date(2024, 9, 18), beneficiaryId: 1, type: paymentTypes.card, amount: 84.76, state: transactionStates.send },
    { id: 4, date: new Date(2024, 9, 18), beneficiaryId: 3, type: paymentTypes.online, amount: 22.10, state: transactionStates.send },
    { id: 5, date: new Date(2024, 9, 18), beneficiaryId: 4, type: paymentTypes.card, amount: 46.25, state: transactionStates.send },
    { id: 6, date: new Date(2024, 9, 17), beneficiaryId: 5, type: paymentTypes.online, amount: 19.72, state: transactionStates.send },
    { id: 7, date: new Date(2024, 9, 16), beneficiaryId: 6, type: paymentTypes.transaction, amount: 68.87, state: transactionStates.send },
    { id: 8, date: new Date(2024, 9, 15), beneficiaryId: 7, type: paymentTypes.transaction, amount: 52.36, state: transactionStates.send },
    { id: 9, date: new Date(2024, 9, 15), beneficiaryId: 8, type: paymentTypes.card, amount: 75.93, state: transactionStates.send },
    { id: 10, date: new Date(2024, 9, 14), beneficiaryId: 9, type: paymentTypes.online, amount: 142.95, state: transactionStates.send },
  ];
    
  res.json(transactions);
});

app.listen(port, () => {
    console.log(`Bank-app backend server is listening on port ${port}`);
});
