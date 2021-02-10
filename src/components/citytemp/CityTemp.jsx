import React from 'react'

export default function CityTemp(props) {
    return (
        <div>
            <h1> {props.location} </h1>
           <div>
                <div>
                    <img src={props.img}/>
                </div>
                <div>
                    <h6> {props.date}</h6>
                    <h6> {props.overcast}</h6>
                    <h6> {props.feel}</h6>
                   
                </div> 
           </div>
        </div>
    )
}
