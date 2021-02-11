import React from 'react'
import format from "../../helper/helpers";
import * as Bootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = (props) => {
    return (
        
        <React.Fragment >
            <Bootstrap.Col sm className="item"> Rain: {format(props.todayData.predictability)}</Bootstrap.Col>
            <Bootstrap.Col sm className="item"> Humidity: {format(props.todayData.humidity)}</Bootstrap.Col>
            <Bootstrap.Col sm className="item">Wind: {format(props.todayData.wind_speed)}</Bootstrap.Col>
            <Bootstrap.Col sm className="item"> Wind Direction: {format(props.todayData.wind_direction)}</Bootstrap.Col>
            <Bootstrap.Col sm className="item">Pressure: {format(props.todayData.air_pressure)}</Bootstrap.Col>
            <Bootstrap.Col sm className="item">Visibility: {format(props.todayData.visibility)}</Bootstrap.Col>
        </React.Fragment>  
    )
}




export default Header
