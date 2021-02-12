import React from 'react'
import * as BootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import getImg from "../imgs/imgs";
import format from "../../helper/helpers";


export default function CityTemp({location, data,sunRise, sunSet}) {
    return (
        <BootStrap.Col md={5} className= "offset-md-1 ">
            <h1 className="text-lg-left text-sm-center text-info"> {location} </h1>  
            
            <BootStrap.Row >
                <BootStrap.Col lg="auto" className="text-left text-lg-left text-sm-center text-sm-center m-auto" >
                   
                        <BootStrap.Image src={getImg(data.weather_state_abbr)} fluid  width="100" alt="weather icon" className="text-left p-0"/>
                
                   
                </BootStrap.Col>
                
                <BootStrap.Col className=" text-lg-left text-sm-center  m-auto border border-light shadow-sm  p-4" >
                <h6 > Date: {data.applicable_date}</h6>
                <h6>overcast: {format(data.the_temp,1)} &deg;c</h6>
               
                <h6> Sun Rise: {sunRise.substring(sunRise.indexOf('T') +1, sunRise.indexOf('.'))}</h6>
                <h6> Sun Set: {sunSet.substring(sunSet.indexOf('T') +1, sunSet.indexOf('.'))}</h6>
                <h6> Sky: {data.weather_state_name}</h6>
               
                </BootStrap.Col>
            </BootStrap.Row>
        </BootStrap.Col>

     
        
        

    )
}
