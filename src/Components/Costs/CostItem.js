import React from "react";
import "./CostItem.css";
import CostData from "./CostData";
import "./CostData.css";
import Card from "../UI/Card";

const CostItem = ({ date, description, amount }) => {
  return (
    <li>
      <Card className="cost-item">
        <CostData date={date} />
        <div className="cost-item__description">
          <h2>{description}</h2>
          <div className="cost-item__price">$ {amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default CostItem;
