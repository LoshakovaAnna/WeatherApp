import React from 'react';

import WeatherItem from './WeatherItem';
import convertKelvinToCelsius from './convertKelvinToCelsius';

export default function WeatherOther(props) {
    const { days } = props;

    return(
        <div>
            {
                days.map(
                    function(day,index) {                        
                        const strData = day.dt_txt;
                        const newDay = {
                            data        :   strData.substr(0,10),
                            time        :   strData.substr(11,8),
                            iconUrl     :   "http://openweathermap.org/img/w/" + day.weather[0].icon + ".png",
                            temp        :   convertKelvinToCelsius(day.main.temp),                            
                            weatherMain :    day.weather[0].main
                        }
                    return <WeatherItem key={index} info={newDay} />                
                })
            }
        </div>
    )
}