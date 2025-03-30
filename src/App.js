import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import TransactionCreation from "./components/TransactionCreation";
import TransactionsHistory from "./components/TransactionsHistory";
import TransactionDetails from "./components/TransactionDetails";

function App() {
  return (
    <Provider store={store}>
      <div style={{ backgroundColor: "orange"}}><h1>Peachtree Bank</h1></div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
        <TransactionCreation />
        <TransactionsHistory />
        <TransactionDetails transactionId={1} />
      </div>
    </Provider>
  );
}

export default App;
