
import Header from '../components/Header/Header'
import React, { useState, useEffect } from 'react';
import City from "../components/citytemp/CityTemp"
import logo from "../logo.svg";
import Chart from "../components/chart/Chart";
import * as BootStrap from 'react-bootstrap';
import Search from "../components/Search/Search";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function WeatherApp() {
    const [HeaderData, setHeaderData]= useState( {"rain":"none", "humidity": 20, "wind": 26, "pressure":85, "dewPoint": 25.5, "UVindex":66, "visibility":35} )

    const [location, setlocation] = useState({ isLoaded: false,locationData:[]})
    const [WeatherData, setWeatherData] = useState({ loading:false, data:{}})
    const [Error, setError] = useState(null)
    const [userCountry, setUserCountry] = useState("")

    const [URL, setURL] = useState("https://www.metaweather.com/api/location/search/?query=london")
    const [WeatherURL, setWeatherURL] = useState("")
    
    const  fetching =  (URL) =>
        fetch(URL)
        .then((res) => res.json())
        .then(
          (result) => {
              return result;
          },
          (error) => {
            setError(error);
          }
      );

         
      useEffect(() => {
          fetching(URL)
         .then((result) => {
                            setlocation({isLoaded:true, locationData: result} ) 
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
      <BootStrap.Container fluid >
     
     
      <BootStrap.Row
      className="justify-content-md-center bg-info p-1 text-light">
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



      <BootStrap.Row  className="justify-content-md-center  p-1 text-light">
        <Search handleSubmit={handleSubmit} handleChange={handleChange} inputValue={userCountry} />
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