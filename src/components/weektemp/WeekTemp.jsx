import React from 'react'
import './WeekTemp.css';
const WeekTemp = (props) =>{
    return (
        <div className="container">
            <h1 class="next-8-days__heading">8 days forcast </h1>
            <p class="next-8-days__heading">{props.textInfo}</p>

            <div class="next-8-days__row1">
                <div class="next-8-days__date">   
                </div>

                <div class="next-8-days__date">
                    Day
                </div>

                <div class="next-8-days__icon">  
                </div>
                
                <div class="next-8-days__low">
                    Low
                </div>

                <div class="next-8-days__high"> 
                    High
                </div>

                <div class="next-8-days__wind">
                    Wind
                </div>
            </div>


            <div class="next-8-days__row">
                <div class="next-8-days__date">
                    <button className="btn">+</button>
                </div>

                <div class="next-8-days__date">
                    Today
                </div>

                <div class="next-8-days__icon">
                    <img src={props.icon} alt="icon" 
                    height="50" width="50"></img> 
                </div>

                <div class="next-8-days__low">
                    10&deg;C {props.low}
                    <div class="next-8-days__label">@6am {props.time}</div>
                </div>

                <div class="next-8-days__high"> 
                    21&deg;C {props.high}
                    <div class="next-8-days__label">@2pm {props.time}</div>
                </div>

                <div class="next-8-days__wind">
                    {props.wind}
                </div>
            </div>

            <div class="next-8-days__row">

                <div class="next-8-days__date">
                    <button className="btn">+</button>
                </div>

                <div class="next-8-days__date">
                    Sun
                </div>

                <div class="next-8-days__icon">
                    <img src={props.icon} alt="icon"
                    height="50" width="50"></img>
                </div>
                
                <div class="next-8-days__low">
                    9&deg;C {props.low}
                    <div class="next-8-days__label">@6am {props.time}</div>
                </div>

                <div class="next-8-days__high">
                    18&deg;C {props.high}
                    <div class="next-8-days__label">@2pm {props.time}</div>
                </div>

                <div class="next-8-days__wind">
                    {props.wind}
                </div>

            </div>

            <div class="next-8-days__row">
                
                <div class="next-8-days__date">
                    <button className="btn">+</button>
                </div>
                
                <div class="next-8-days__date">
                    Mon
                </div>

                <div class="next-8-days__icon">
                    <img src={props.icon} alt="icon"
                    height="50" width="50"></img>
                </div>
                
                <div class="next-8-days__low">
                    7&deg;C {props.low}
                    <div class="next-8-days__label">@6am {props.time}</div>
                </div>

                <div class="next-8-days__high">
                    15&deg;C {props.high}
                    <div class="next-8-days__label">@2pm {props.time}</div>
                </div>

                <div class="next-8-days__wind">
                    {props.wind}
                </div>
            </div>

            <div class="next-8-days__row">
                <div class="next-8-days__date">
                    <button className="btn">+</button>
                </div>

                <div class="next-8-days__date">
                    Tue
                </div>

                <div class="next-8-days__icon">
                    <img src={props.icon} alt="icon"
                    height="50" width="50"></img>
                </div>
                
                <div class="next-8-days__low">
                    12&deg;C {props.low}
                    <div class="next-8-days__label">@6am {props.time}</div>
                </div>

                <div class="next-8-days__high">
                    24&deg;C {props.high}
                    <div class="next-8-days__label">@2pm {props.time}</div>
                </div>

                <div class="next-8-days__wind">
                    {props.wind}
                </div>

            </div>

            <div class="next-8-days__row">
                <div class="next-8-days__date">
                    <button className="btn">+</button>
                </div>

                <div class="next-8-days__date">
                    Web
                </div>

                <div class="next-8-days__icon">
                    <img src={props.icon} alt="icon"
                    height="50" width="50"></img>
                </div>
                
                <div class="next-8-days__low">
                    10&deg;C {props.low}
                    <div class="next-8-days__label">@6am {props.time}</div>
                </div>

                <div class="next-8-days__high">
                    21&deg;C {props.high}
                    <div class="next-8-days__label">@2pm {props.time}</div>
                </div>

                <div class="next-8-days__wind">
                    {props.wind}
                </div>
            </div>

            <div class="next-8-days__row">
                <div class="next-8-days__date">
                    <button className="btn">+</button>
                </div>

                <div class="next-8-days__date">
                    Thu
                </div>

                <div class="next-8-days__icon">
                    <img src={props.icon} alt="icon"
                    height="50" width="50"></img>
                </div>
                
                <div class="next-8-days__low">
                    10&deg;C {props.low}
                    <div class="next-8-days__label">@6am {props.time}</div>
                </div>

                <div class="next-8-days__high">
                    21&deg;C {props.high}
                    <div class="next-8-days__label">@2pm {props.time}</div>
                </div>

                <div class="next-8-days__wind">
                    {props.wind}
                </div>
            </div>

            <div class="next-8-days__row">
                <div class="next-8-days__date">
                    <button className="btn">+</button>
                </div>

                <div class="next-8-days__date">
                    Fri
                </div>

                <div class="next-8-days__icon">
                    <img src={props.icon} alt="icon"
                    height="50" width="50"></img>
                </div>
                
                <div class="next-8-days__low">
                    10&deg;C {props.low}
                    <div class="next-8-days__label">@6am {props.time}</div>
                </div>

                <div class="next-8-days__high">
                    21&deg;C {props.high}
                    <div class="next-8-days__label">@2pm {props.time}</div>
                </div>

                <div class="next-8-days__wind">
                    {props.wind}
                </div>
            </div>

            <div class="next-8-days__row">
                <div class="next-8-days__date">
                    <button className="btn">+</button>
                </div>

                <div class="next-8-days__date">
                    Sat
                </div>

                <div class="next-8-days__icon">
                    <img src={props.icon} alt="icon"
                    height="50" width="50"></img>
                </div>
                
                <div class="next-8-days__low">
                    10&deg;C {props.low}
                    <div class="next-8-days__label">@6am {props.time}</div>
                </div>

                <div class="next-8-days__high">
                    21&deg;C {props.high}
                    <div class="next-8-days__label">@2pm {props.time}</div>
                </div>

                <div class="next-8-days__wind">
                   {props.wind}
                </div>
            </div>

        </div>

    )
}
export default WeekTemp