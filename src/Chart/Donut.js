import React, { useState, useEffect } from "react";
import D3Chart from "../Chart/D3Chart";
import axios from 'axios';
 
function Donut() {
   const[data, setChartData] = useState({});
   
     
   useEffect(() => {
       const getData = async () => {
           const res =await axios("http://localhost:3001/budget",);
           setChartData(res.data);
       };
       getData();
   }, [])
   console.log(data);
  
 return (
   <div>
   
     <div>
       <D3Chart
         data={data}
         width={400}
         height={400}
         innerRadius={100}
         outerRadius={200}
       />
     </div>
   </div>
 );
}
export default Donut;