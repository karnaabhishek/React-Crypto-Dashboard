import {useEffect, useState} from 'react';
import Table from './Table';
import { Link } from "react-router-dom";
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
  
function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") === -1) {
      x.className += "w3-show";
    } else { 
      x.className = x.className.replace("w3-show", "");
    }
  }
const Horizontalchart =() => {
    const [data, setData] = useState({
        labels:[],
        datasets: [
          {
            label: [],
            data:[],
            code: [],
            symbol: [],
            description: [],
            borderColor: [],
            backgroundColor: [],
          },
          
        ],
      });
      
    
    useEffect(()=> {
       
       const fetchData= async()=> {
           const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'

         await fetch(url).then((data)=> {
             console.log("Api data", data)
             const res = data.json();
             return res
         }).then((res) => {
             console.log("ressss", res)
             const dataSet1=res.bpi.USD.rate_float
             const dataSet2=res.bpi.GBP.rate_float
             const dataSet3=res.bpi.EUR.rate_float
             const code1=res.bpi.USD.code
             const code2=res.bpi.GBP.code
             const code3=res.bpi.EUR.code
             const symbol1=res.bpi.USD.symbol
             const symbol2=res.bpi.GBP.symbol
             const symbol3=res.bpi.EUR.symbol
             const description1=res.bpi.USD.description
             const description2=res.bpi.GBP.description
             const description3=res.bpi.EUR.description
             const keys=Object.keys(res.bpi);
             
            setData({
                labels: keys,
                datasets: [
                  {
                    label: "Dataset",
                    data:[dataSet1, dataSet2, dataSet3],
                    code:[code1, code2, code3],
                    symbol: [symbol1, symbol2, symbol3],
                    description: [description1, description2, description3],
                    borderColor: 'rgb(255, 99, 132)', 
                    backgroundColor: 'rgb(255, 99, 132)',
                    
                  },
                  
                ],
              })
         }).catch(e => {
                console.log("error", e)
            })
        }
        fetchData();
        setInterval(() => {
          fetchData();
        }, 10000);
        
    },[])
   
    return(
        <div>
          <div style={{width:'50%', height:'100%', margin: 'auto'}}>
            
            <Bar data={data} options={options}/>
            <Table data = {data}/>
            <div>
              <span>USD</span><button onClick={() => myFunction('Demo1')} class="w3-btn w3-block w3-black w3-left-align">Details</button>
            </div>
            <div id="Demo1" class="w3-container w3-hide">
              <h4>{data.labels[0] + " " + data.datasets[0].data[0]}</h4>
  
            </div>
            <br></br>
            <div>
              <span>GBP</span><button onClick={() => myFunction('Demo2')} class="w3-btn w3-block w3-black w3-left-align">Details</button>
            </div>
            <div id="Demo2" class="w3-container w3-hide">
              <h4>{data.labels[1] + " " + data.datasets[0].data[1]}</h4>
  
            </div>
            <br></br>
            <div>
              <span>EUR</span><button onClick={() => myFunction('Demo3')} class="w3-btn w3-block w3-black w3-left-align">Details</button>
            </div>
            <div id="Demo3" class="w3-container w3-hide">
              <h4>{data.labels[2] + " " + data.datasets[0].data[2]}</h4>
  
            </div>
            <Link to="/about">About</Link>
          </div>
        </div>
        )
}
export default Horizontalchart;