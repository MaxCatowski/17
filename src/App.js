import { useEffect, useState } from "react";
import { costs } from "./Data/databank";
import "./App.css";
import Costs from "./Components/Costs/Costs";
import NewCost from "./Components/NewCost/NewCost";

const INITIAL_COSTS = costs;

const getIinitialState = () => {
  const addcosts = localStorage.getItem("addcosts");
  return addcosts ? JSON.parse(addcosts) : INITIAL_COSTS;
};

function App() {
  const [addcosts, setaddCosts] = useState(getIinitialState);
  useEffect(() => {
    localStorage.setItem("addcosts", JSON.stringify(addcosts));
  }, [addcosts]);

  const addCostHandler = (cost) => {
    console.log(cost);
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
