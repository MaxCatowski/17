import React from "react";
import DiagramBar from "./DiagramBar";
import "./Diagram.css";

const Diagram = (props) => {
  const dataSetsValue = props.dataSets.map((data) => data.value);

  const maxMathCosts = Math.max(...dataSetsValue);
  return (
    <div className="diagram">
      {props.dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={maxMathCosts}
          label={dataSet.label}
        />
      ))}
    </div>
  );
};

export default Diagram;
