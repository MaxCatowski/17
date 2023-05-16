import React, { useState } from "react";
import "./NewCost.css";
import CostForm from "./CostForm";

const NewCost = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const CostDataHandler = (input) => {
    const costData = {
      ...input,
      id: Math.random().toString(),
    };
    props.addCost(costData);
    setIsFormVisible(false);
  };
  const inputCostDataHandler = () => {
    setIsFormVisible(true);
  };
  const cancelCostHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={inputCostDataHandler}>Добавить Новый Расход</button>
      )}
      {isFormVisible && (
        <CostForm CostData={CostDataHandler} onCancel={cancelCostHandler} />
      )}
    </div>
  );
};

export default NewCost;
