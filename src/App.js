import "./App.css";
import ClientTransactionCreation from "./components/ClientTransactionCreation";

function App() {
  return (
    <div>
      <div style={{"backgroundColor": "orange"}}><h1>Peachtree Bank</h1></div>
      <ClientTransactionCreation />
    </div>
  );
}

export default App;
