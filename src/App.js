import React, { Component } from 'react';
import WeatherApp from './WeatherApp';
import convertKelvinToCelsius from './convertKelvinToCelsius';
import getDirectionByDegree from './getDirectionByDegree';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props) ;
      this.state = {
        weatherData:null,
        weatherDays:null
      };
   }

  componentDidMount(){
    const fetch1 = axios('https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247'); //отправка запроса - 
    const fetch2 = axios('https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247');
    
    Promise.all( [fetch1, fetch2] )
      .then(data => {
        console.log(data);
        const arr = data[1].data.list;
        const arr2 = arr.filter((data, index) => index%8===0)
        this.setState({ weatherData: data[0], weatherDays: arr2 });
      });          
  }
  
  render() {
    const {weatherData, weatherDays} = this.state;
    
    if (!weatherData) return <div>Loading</div>;
  
    const time = new Date(weatherData.data.dt * 1000);
    
    var todayWeather = {
      town : weatherData.data.name,
      country : weatherData.data.sys.country,
      time: time.toLocaleTimeString().substr(0,5),
      iconUrl : "http://openweathermap.org/img/w/" + weatherData.data.weather[0].icon + ".png",
      weatherMain : weatherData.data.weather[0].main,
      weatherDiskr :  weatherData.data.weather[0].description,
      temp : convertKelvinToCelsius(weatherData.data.main.temp),
      windSpeed :  weatherData.data.wind.speed,
      windSide: getDirectionByDegree(weatherData.data.wind.deg)
    }
    
    return(
      <div>
        <WeatherApp weatherToday={todayWeather} days = {weatherDays}/>
      </div>
    )}
}

export default App;
