import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import ClientTransactionCreation from "./components/ClientTransactionCreation";
import ClientTransactionsHistory from "./components/ClientTransactionsHistory";
import ClientTransactionDetails from "./components/ClientTransactionDetails";

function App() {
  return (
    <Provider store={store}>
      <div style={{ backgroundColor: "orange"}}><h1>Peachtree Bank</h1></div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
        <ClientTransactionCreation />
        <ClientTransactionsHistory />
        <ClientTransactionDetails /> {/* TODO: edit later*/}
      </div>
    </Provider>
  );
}

export default App;
