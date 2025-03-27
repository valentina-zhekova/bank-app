import "./App.css";
import ClientTransactionCreation from "./components/ClientTransactionCreation";
import ClientTransactionsHistory from "./components/ClientTransactionsHistory";

function App() {
  return (
    <div>
      <div style={{ backgroundColor: "orange"}}><h1>Peachtree Bank</h1></div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
        <ClientTransactionCreation />
        <ClientTransactionsHistory />
      </div>
    </div>
  );
}

export default App;
