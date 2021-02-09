import React from 'react'
import './Header.css';
const Header = (props) => {
    return (
        <div className="HeaderItems">
            <div className="item"> Rain: {props.rain}</div>
            <div className="item"> Humidity: {props.humidity}</div>
            <div className="item">Wind: {props.wind}</div>
            <div className="item">Pressure: {props.pressure}</div>
            <div className="item"> Dew Point: {props.dewPoint}</div>
            <div className="item">UV Index: {props.UVindex}</div>
            <div className="item">Visibility: {props.visibility}</div>
        </div>  
    )
}

export default Header
