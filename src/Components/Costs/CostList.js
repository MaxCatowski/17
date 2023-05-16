import React from "react";
import CostItem from "./CostItem";
import "./CostList.css";

const CostList = ({ costs }) => {
  if (costs.length === 0) {
    return <h2 className="cost-list__fallback ">Данных нет</h2>;
  }
  return (
    <ul className="cost-list">
      {costs.map((a) => (
        <CostItem
          key={a.id}
          date={a.date}
          description={a.description}
          amount={a.amount}
        />
      ))}
    </ul>
  );
};

export default CostList;
