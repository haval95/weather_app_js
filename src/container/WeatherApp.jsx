

import Header from '../components/Header/Header'
import React, { useState } from 'react';

import City from "../components/citytemp/CityTemp"
import logo from "../logo.svg";
import Chart from "../components/chart/Chart";
import * as BootStrap from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>

let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let now =today.getHours();

const time= (afterHour) => {
  
    return now + afterHour+":00"
}

const state = {
  labels: ["now", time(1), time(2),
  time(3), time(4),time(5)],
  datasets: [
    {
    
      label: 'temperture',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 1,
      data: [10,5,12,33,55]
    }
  ]
}



/* space  */

export default function WeatherApp() {
    const [HeaderData, setHeaderData]= useState( {"rain":"none", "humidity": 20, "wind": 26, "pressure":85, "dewPoint": 25.5, "UVindex":66, "visibility":35} )

   
    return (
      <BootStrap.Container fluid >
      <BootStrap.Row
      className="justify-content-md-center bg-info p-1 text-light"

      >
      <Header     
      
      rain={HeaderData.rain} 
      humidity={HeaderData.humidity} 
      wind={HeaderData.wind} 
      pressure={HeaderData.pressure} 
      dewPoint={HeaderData.dewPoint}
      UVindex={HeaderData.UVindex}
      visibility={HeaderData.visibility}
    />
      </BootStrap.Row>
           <BootStrap.Row>
              <City
              location={"Erbil"}
              img={logo}
              date={date}
              overcast={"25C"}
              feel ={ "cold"}
              />
              <Chart data={state} />
           </BootStrap.Row>

       
            
          


           </BootStrap.Container>

        
    )
}
