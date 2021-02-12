
import React, { useState, useEffect } from 'react';
import * as BootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header/Header'
import City from "../components/citytemp/CityTemp"
import Chart from "../components/chart/Chart";
import Search from "../components/Search/Search";
import Loading from "../components/loading/Loading";
import WeekTemp from "../components/weektemp/WeekTemp";



export default function WeatherApp() {

   
    const [WeatherData, setWeatherData] = useState({ loading:false, data:{}})
    const [error, seterror] = useState(null)
    const [userCountry, setUserCountry] = useState("")

    const state = {
      labels: ["now", time(1), time(2),
      time(3), time(4),time(5)],
      datasets: [
        {
        
          label: 'temperture',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(55,100,25,1)',
          borderWidth: 1,
          data: [10,5,12,33,55]
        }
      ]
    }

    const [URL, setURL] = useState("https://www.metaweather.com/api/location/search/?query=Baghdad")
    const [WeatherURL, setWeatherURL] = useState("")
    
    const  fetching =  (URL) =>
        fetch(URL)
        .then((res) => res.json())
        .then(
          (result) => {
              return result
          },
          (error) => {
            seterror(error);
          }
      );

         
      useEffect(() => {
          fetching(URL)
         .then((result) => {
                            setWeatherURL("https://www.metaweather.com/api/location/"+result[0].woeid)
                          })
       }, [URL]);


       useEffect(() => {
           fetching(WeatherURL)
           .then((result)=> setWeatherData({loading:true, data:result})) 
       }, [ WeatherURL]);



       const handleSubmit =(e)=>{
        e.preventDefault();
      
          setURL("https://www.metaweather.com/api/location/search/?query="+userCountry)
          setUserCountry("")
          
        
       }


       const handleChange =(e)=> setUserCountry(e.target.value)
       

      

    return (
    <React.Fragment>
        {
      (WeatherData.data) && (WeatherData.loading) 
        
        ?<BootStrap.Container fluid  >
            <BootStrap.Row className="justify-content-sm-center bg-info p-4 text-light">
                <Header todayData={WeatherData.data.consolidated_weather[0]} />
            </BootStrap.Row>

            <BootStrap.Row  className="justify-content-sm-center  p-1 text-light">
                <Search handleSubmit={handleSubmit} handleChange={handleChange} inputValue={userCountry} />
            </BootStrap.Row>
              

            <BootStrap.Container>
              <BootStrap.Row>
                    <City
                    location={WeatherData.data.title}
                    data={WeatherData.data.consolidated_weather[0]}
                    />
                    <Chart data={state} />
                </BootStrap.Row>


                <BootStrap.Row className="mt-5 ">
                  <WeekTemp data={WeatherData.data} />
                </BootStrap.Row>

            </BootStrap.Container>




        </BootStrap.Container>
     
        : <Loading />
      }
    </React.Fragment>

        
    )
}







let today = new Date();

let now =today.getHours();

const time= (afterHour) => {
  
    return now + afterHour+":00"
}


