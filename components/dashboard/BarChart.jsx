import React,{useState,useEffect} from 'react'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
}from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
)

const BarChart = () => {
    const[chartData,setChartData] = useState({
        datasets: [],
    });
    const[chartOptions,setChartOptions] = useState({});

    useEffect( () => {
        setChartData({
            labels: ['Mon','Tues','wed','Thurs','Fri','Sat','Sun','Mon','Tues','wed','Thurs','Fri','Sat','Sun'],
            datasets: [
                {
                    label: 'Sales $',
                    data: [18127, 22201, 19490,17938,17938,24182,17842,22475,18127, 22201, 19490,17938,17938,24182,17842,22475],
                    borderColor:'rgb(53,162,235)',
                    backgroundColor: 'rgb(53,162,235,0.4)',
                }
            ]
        })
        setChartOptions({
            plugins: {
                legend: {
                    display: false,
                },
                title: {
                    display:true,
                    text: 'Nombre de distributeurs par client',
                    position: 'bottom',
                },

            },
            maintainAspectRatio : false,
            responsive:true,
        })
    },[])

    return (
      <> 
      <div className="h-full pr-6 ">
         <Bar data={chartData} options={chartOptions}/>
      </div>
      </>
    );
  };

export default BarChart;