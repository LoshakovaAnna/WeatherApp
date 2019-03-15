import React from 'react';

export default function WeatherToday(props) {
  const {  
        town,
        country, 
        iconUrl,  
        time, 
        weatherMain,  
        weatherDiskr, 
        temp ,
        windSpeed, 
        windSide 
      } =  props.weatherToday;
      
      return (
          <div className="todayWeather ">
            <p className="text-left">{town}, {country}</p>
            <p className="text-left">{time}</p>
      
            <img src={iconUrl} alt={weatherDiskr} />
            <h1>{weatherMain}</h1>      
            <p>{weatherDiskr}</p>
            <p>{temp}°</p>

            <div className="d-flex flex-row justify-content-between">
              <p>{windSide}</p>
              <p>{windSpeed} m/s</p>
            </div>
          </div>
      );    
};