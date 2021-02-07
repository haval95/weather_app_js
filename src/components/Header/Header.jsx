import React from 'react'
import './Header.css';
const Header = (props) => {
    return (
        <div className="HeaderItems">
            <div> Rain: {props.rain}</div>
            <div> Humidity: {props.humidity}</div>
            <div>Wind: {props.wind}</div>
            <div>Pressure: {props.pressure}</div>
            <div> Dew Point: {props.dewPoint}</div>
            <div>UV Index: {props.UVindex}</div>
            <div>Visibility: {props.visibility}</div>
            
        </div>
    )
}

export default Header
