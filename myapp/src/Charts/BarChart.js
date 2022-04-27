import {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
const options = {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };

const Horizontalchart =() => {
    const [data, setData] = useState({
        labels:[],
        datasets: [
          {
            label: [],
            data:[],
            borderColor: [],
            backgroundColor: [],
          },
          
        ],
      });
    useEffect(()=> {
       const fetchData= async()=> {
           const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
           
           const dataSet1 = [];
           const dataSet2 = [];
           const dataSet3 = []; 

         await fetch(url).then((data)=> {
             console.log("Api data", data)
             const res = data.json();
             return res
         }).then((res) => {
             console.log("ressss", res)
             dataSet1.push(res.bpi.USD.rate_float)
             dataSet2.push(res.bpi.GBP.rate_float)
             dataSet3.push(res.bpi.EUR.rate_float)
             
             var keys=Object.keys(res.bpi);
             
            setData({
                labels: keys,
                datasets: [
                  {
                    label: "Dataset",
                    data:[dataSet1, dataSet2, dataSet3],
                    borderColor: 'rgb(255, 99, 132)', 
                    backgroundColor: 'rgb(255, 99, 132)',
                  },
                  
                ],
              })
            console.log("arrData", dataSet1, dataSet2, dataSet3)
         }).catch(e => {
                console.log("error", e)
            })
        }
        
        fetchData();
    },[])
   
    return(
        <div style={{width:'80%', height:'50%'}}>
            <Bar data={data} options={options}/>
            <div>
              <ul>
                <h1>{data.labels[0]}</h1>
                <h2>{data.datasets[0].data[0]}</h2>
                <h1>{data.labels[1]}</h1>
                <h2>{data.datasets[0].data[1]}</h2>
                <h1>{data.labels[2]}</h1>
                <h2>{data.datasets[0].data[2]}</h2>
              </ul>
            </div>
         </div>)
}
export default Horizontalchart;
