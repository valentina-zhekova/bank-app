import { createStore } from "redux";

const paymentTypes = {
  card: "Card Payment",
  online: "Online Transfer",
  transaction: "Transaction"
};

const accounts = {
  id1: { name: "The Tea Lounge", img: "defaultThumb.png" },
  id2: { name: "Texaco", img: "defaultThumb.png" },
  id3: { name: "Amazon Online Store", img: "defaultThumb.png" },
  id4: { name: "7-Eleven", img: "defaultThumb.png" },
  id5: { name: "H&M Online Store", img: "defaultThumb.png" },
  id6: { name: "Jerry Hildreth", img: "defaultThumb.png" },
  id7: { name: "Lawrance Pearson", img: "defaultThumb.png" },
  id8: { name: "Whole Foods", img: "defaultThumb.png" },
  id9: { name: "Southern Electric Company", img: "defaultThumb.png" }
};

const initialState = {
  accounts,
  transactions: [
    { date: new Date(2024, 9, 19), thumbnail: accounts.id1.img, beneficiary: accounts.id1.name, type: paymentTypes.card, amount: 82.02 },
    { date: new Date(2024, 9, 19), thumbnail: accounts.id2.img, beneficiary: accounts.id2.name, type: paymentTypes.card, amount: 84.64 },
    { date: new Date(2024, 9, 18), thumbnail: accounts.id1.img, beneficiary: accounts.id1.name, type: paymentTypes.card, amount: 84.76 },
    { date: new Date(2024, 9, 18), thumbnail: accounts.id3.img, beneficiary: accounts.id3.name, type: paymentTypes.online, amount: 22.10 },
    { date: new Date(2024, 9, 18), thumbnail: accounts.id4.img, beneficiary: accounts.id4.name, type: paymentTypes.card, amount: 46.25 },
    { date: new Date(2024, 9, 17), thumbnail: accounts.id5.img, beneficiary: accounts.id5.name, type: paymentTypes.online, amount: 19.72 },
    { date: new Date(2024, 9, 16), thumbnail: accounts.id6.img, beneficiary: accounts.id6.name, type: paymentTypes.transaction, amount: 68.87 },
    { date: new Date(2024, 9, 15), thumbnail: accounts.id7.img, beneficiary: accounts.id7.name, type: paymentTypes.transaction, amount: 52.36 },
    { date: new Date(2024, 9, 15), thumbnail: accounts.id8.img, beneficiary: accounts.id8.name, type: paymentTypes.card, amount: 75.93 },
    { date: new Date(2024, 9, 14), thumbnail: accounts.id9.img, beneficiary: accounts.id9.name, type: paymentTypes.online, amount: 142.95 },
  ]
};

const rootReducer = (state = initialState) => {
    return state;
}

const store = createStore(rootReducer);

export default store;
