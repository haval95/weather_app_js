import React from 'react'
import * as BootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import getImg from "../imgs/imgs";
import format from "../../helper/helpers";

import  "./CityTemp.css";

export default function CityTemp(props) {
    return (
        <BootStrap.Col md className="m-2">
            <h1 className="cityName"> {props.location} </h1>  
            
            <BootStrap.Row>
                <BootStrap.Col className="text-right my-auto">
                    <img src={getImg(props.data.weather_state_abbr)} className="icon"/>
                </BootStrap.Col>
                
                <BootStrap.Col className=" text-left">
                <h6 > Date: {props.data.applicable_date}</h6>
                <h6>overcast: {format(props.data.the_temp,1)} &deg;c</h6>
                <h6> Sky: {props.data.weather_state_name}</h6>
                </BootStrap.Col>
            </BootStrap.Row>
        </BootStrap.Col>

     
        
        

    )
}
