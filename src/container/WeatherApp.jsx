import React from 'react'
import Header from '../components/Header/Header'
import React1, { useState } from 'react';

export default function WeatherApp() {
    const [HeaderData, setHeaderData]= useState( {"rain":"none", "humidity": 20, "wind": 26, "pressure":85, "dewPoint": 25.5, "UVindex":66, "visibility":35} )

   
    return (
        <div>
            <Header     rain={HeaderData.rain} 
                        humidity={HeaderData.humidity} 
                        wind={HeaderData.wind} 
                        pressure={HeaderData.pressure} 
                        dewPoint={HeaderData.dewPoint}
                        UVindex={HeaderData.UVindex}
                        visibility={HeaderData.visibility}
                        />
        </div>
    )
}
