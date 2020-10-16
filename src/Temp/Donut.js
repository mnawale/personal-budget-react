import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";
import D3Chart from "../Chart/D3Chart";


function Donut() {
    
  const generateData = (value, length = 7) =>
    d3.range(length).map((item, index) => ({
      date: index,
      value: value === null || value === undefined ? Math.random() * 100 : value
    }));

  const [data, setData] = useState(generateData(0));
  const changeData = () => {
    setData(generateData());
  };
  console.log(data);
  useEffect(() => {
    setData(generateData());
  }, [!data]);
  

  return (
    <div>
      
      <div>
        <D3Chart
          data={data}
          width={200}
          height={200}
          innerRadius={60}
          outerRadius={100}
        />
      </div>
    </div>
  );
}

export default Donut;
