import React, { useState } from "react";

import "./Costs.css";
import Card from "../UI/Card";
import CostFilter from "./CostFilter";
import CostList from "./CostList";
import CostDiagram from "./CostDiagram";

const Costs = ({ add }) => {
  const [inputyear, setinputYear] = useState("2021");
  const filtered = add.filter(
    (b) => b.date.getFullYear() === Number(inputyear)
  );

  const yearChangeHandler = (year) => {
    setinputYear(year);
  };

  return (
    <div>
      <Card className="costs">
        <CostFilter onChangeYear={yearChangeHandler} year={inputyear} />
        <CostDiagram costs={filtered} />

        <CostList costs={filtered} />

        {/* {filtered.length === 0 && content}

        {filtered.length !== 0 &&
         
          ))} */}
      </Card>
    </div>
  );
};
export default Costs;
