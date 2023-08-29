import React, { useEffect, useState } from "react";
import { useProductContext } from "../contexts/ProductsContext";
import ChartBar from "./ChartBar";
import ChartDoughnut from "./ChartDoughnut";
import "../styles/Charts.css";

const Charts = () => {
  const { state } = useProductContext();
  const [data, setData] = useState([]);
  const values = {
    Home: 0,
    Technology: 0,
    Clothes: 0,
    Cleanliness: 0,
    Groceries: 0,
    Other: 0,
  };

  const labels = [
    "Home",
    "Technology",
    "Clothes",
    "Cleanliness",
    "Groceries",
    "Other",
  ];

  useEffect(() => {
    state.products.forEach((product) => {
      const category = product.category;
      values[category]++;
    });
    setData(Object.values(values));
  }, [state]);

  console.log(data);

  return (
    <div className="container_charts">
      <div className="bar">
        {state.products.length > 0 && (
          <ChartBar labels={labels} dataBar={data} />
        )}
      </div>
      <div className="doughnut">
        {state.products.length > 0 && (
          <ChartDoughnut labels={labels} dataDoughnut={data} />
        )}
      </div>
    </div>
  );
};

export default Charts;
