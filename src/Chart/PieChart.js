import React, { useEffect, useState } from 'react';
import {Pie} from 'react-chartjs-2';
import axios from 'axios';
import './PieChart.scss';

const PieChart = () => {

    const[chartData, setChartData] = useState({});
    
    
    const chart = () => {
        let bTitle=[];
        let bValue=[];
        axios.get("http://localhost:3001/budget")
        .then(res =>{
           
            for(const dataObj of res.data){
                bTitle.push(dataObj.title)
                bValue.push(parseInt(dataObj.budget))
            }
            setChartData({
                labels:bTitle,
                datasets: [
                    {
                        data: bValue,
                        backgroundColor: [
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56',
                            '#FF4384',
                            '#FF2584',
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56',
                            '#FF4384'
                            ]
                    }
                ]
            })
        })
        .catch(err => {
            console.log(err);
        });
        
    }

    useEffect(() => {
        chart()
    }, [])
    return (
        <div className="piechart">
            <Pie data= {chartData} />
        </div>

        
    )
}
 export default PieChart; 