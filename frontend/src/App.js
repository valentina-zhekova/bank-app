import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import TransactionCreation from "./components/TransactionCreation";
import TransactionsView from "./components/TransactionsView";

function App() {
  return (
    <Provider store={store}>
      <div className="page-header">
        <img src="./logo.png" alt="" />
        <h1>Peachtree Bank</h1>
      </div>
      <div 
        style={{ 
          display: "flex", 
          flexDirection: "row", 
          justifyContent: "center",
          backgroundImage: "url(/backgroundCut.png)",
          backgroundSize: "cover",
          paddingTop: 72
        }}
      >
        <TransactionCreation />
        <TransactionsView />
      </div>
    </Provider>
  );
}

export default App;
