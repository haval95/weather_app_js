import React from 'react'

import  "./CityTemp.css";

export default function CityTemp(props) {
    return (
        <div className="citySection">
            <h1 className="cityName"> {props.location} </h1>
            <div className="cityTempSection">
                    <div className="col-end">
                        <img src={props.img} className="icon"/>
                    </div>
                    <div className="col-start">
                
                        <h6> {props.date}</h6>
                        <h6>overcast: {props.overcast}</h6>
                        <h6> feels like: {props.feel}</h6>
                    
                    </div> 
            
            </div>
        </div>
        

    )
}
