import React from "react";
import Diagram from "../Diagrams/Diagram";

const CostDiagram = (props) => {
  const diagramDataset = [
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "mar", value: 0 },
    { label: "apr", value: 0 },
    { label: "may", value: 0 },
    { label: "jun", value: 0 },
    { label: "jul", value: 0 },
    { label: "aug", value: 0 },
    { label: "spt", value: 0 },
    { label: "oct", value: 0 },
    { label: "nov", value: 0 },
    { label: "dec", value: 0 },
  ];

  for (const cost of props.costs) {
    const costMonth = new Date(cost.date).getMonth();
    diagramDataset[costMonth].value += cost.amount;
  }

  return <Diagram dataSets={diagramDataset} />;
};

export default CostDiagram;
