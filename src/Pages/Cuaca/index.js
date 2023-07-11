import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cuaca() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.weatherapi.com/v1/forecast.json?key=f1ef6b7313854579b4031724230306&q=jakarta&days=3'
        );
        setWeatherData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="weather-app">
      <h1 className="title">WeatherNow!</h1>
      {weatherData ? (
        <div>
          <div className="today">
            <h2>Cuaca Hari ini</h2>
            <p className="temperature">{weatherData.current.temp_c}°C</p>
            <p className="condition">{weatherData.current.condition.text}</p>
          </div>
          <h2>Ramalan suhu 3 hari kedepan</h2>
          <div className="forecast">
            {weatherData.forecast.forecastday.map((day) => (
              <div className="forecast-day" key={day.date}>
                <p className="date">{day.date}</p>
                <p className="max-temp">Suhu Max: {day.day.maxtemp_c}°C</p>
                <p className="min-temp">Suhu Min: {day.day.mintemp_c}°C</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );  
}

export default Cuaca;
