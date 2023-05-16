import { useState } from "react";
import { costs } from "./Data/databank";
import "./App.css";
import Costs from "./Components/Costs/Costs";
import NewCost from "./Components/NewCost/NewCost";

const INITIAL_COSTS = costs;

function App() {
  const [addcosts, setaddCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setaddCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div className="App">
      <h1>cost calculation</h1>
      <NewCost addCost={addCostHandler} />
      <Costs add={addcosts} />
    </div>
  );
}

export default App;
