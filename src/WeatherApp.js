import React from 'react';

import WeatherOther from './WeatherOther';
import WeatherToday from './WeatherToday';

export default function WeatherApp(props) {
    const { weatherToday, days} = props;
    return(
        <div className= 'weatherApp'>
            <WeatherToday weatherToday = { weatherToday } />
            <WeatherOther days = { days }/>
        </div>
    )
}