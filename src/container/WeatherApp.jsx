

import Header from '../components/Header/Header'
import React, { useState } from 'react';

import {Line} from 'react-chartjs-2';
let current = new Date();
let now =current.getHours();

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
      data: [30, 31, 30, 25, 34,47]
    }
  ]
}


export default function WeatherApp() {
    const [HeaderData, setHeaderData]= useState( {"rain":"none", "humidity": 20, "wind": 26, "pressure":85, "dewPoint": 25.5, "UVindex":66, "visibility":35} )

   
    return (
        <div className="grid">
            <Header     rain={HeaderData.rain} 
                        humidity={HeaderData.humidity} 
                        wind={HeaderData.wind} 
                        pressure={HeaderData.pressure} 
                        dewPoint={HeaderData.dewPoint}
                        UVindex={HeaderData.UVindex}
                        visibility={HeaderData.visibility}
                        />


                        <div className="chart">
                        <Line
                        data={state}
                        options={{
                          title:{
                            display:true,
                            text:'Average Rainfall per month',
                            fontSize:20
                          },
                          legend:{
                            display:true,
                            position:'right'
                          }
                        }}
                      />
                        </div>
        </div>

        
    )
}
