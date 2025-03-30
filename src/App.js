import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import TransactionCreation from "./components/TransactionCreation";
import TransactionsView from "./components/TransactionsView";

function App() {
  return (
    <Provider store={store}>
      <div style={{ backgroundColor: "orange"}}><h1>Peachtree Bank</h1></div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
        <TransactionCreation />
        <TransactionsView />
      </div>
    </Provider>
  );
}

export default App;
