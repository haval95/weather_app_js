

import Header from '../components/Header/Header'
import React, { useState } from 'react';

import City from "../components/citytemp/CityTemp"
import logo from "../logo.svg";

import WeekTemp from '../components/weektemp/WeekTemp'

import Location from "../components/citytemp/CityTemp"


import {Line} from 'react-chartjs-2';
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
        <div className="">
            <Header     
              rain={HeaderData.rain} 
              humidity={HeaderData.humidity} 
              wind={HeaderData.wind} 
              pressure={HeaderData.pressure} 
              dewPoint={HeaderData.dewPoint}
              UVindex={HeaderData.UVindex}
              visibility={HeaderData.visibility}
            />

            <City
            location={"Erbil"}
            img={logo}
            date={date}
            overcast={"25C"}
            feel ={ "cold"}
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

                <WeekTemp textInfo={"Rain on Tuesday through next Saturday"}
                          icon={"https://cdn4.iconfinder.com/data/icons/programming-line-style/32/Cloud-512.png"}
                          low={""}
                          high={""}
                          time={""}
                          wind={12+"kph"}
                />
              </div>


         </div>

        
    )
}
