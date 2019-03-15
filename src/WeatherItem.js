import React from 'react';

export default function WeatherItem(props) {
    const {data, time, iconUrl, temp, weatherMain} = props.info;
    
    return(
        <div className="d-flex flex-row justify-content-between weaterItem">
            <div className="d-flex flex-column ">            
                <p>{data}</p>
                <p>{time}</p>
            </div>

            <img src={iconUrl} alt={weatherMain} />

            <p>{temp}°C</p>
        </div>
    )
}