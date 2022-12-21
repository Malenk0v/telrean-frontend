import React, { useState } from 'react';
import { api_key, base_url } from '../units/constants';
import { WeatherInfo } from '../units/tytpes';
import Form from './Form';
import Weather from './Weather';

const Data = () => {
  const [weatherInfo, setWeahterInfo] = useState<WeatherInfo>({
    message: 'Enter city name',
  });

  const getWeather = (city: string) => {
    fetch(`${base_url}?q=${city}&appid=${api_key}`)
      .then((response) => response.json())
      .then((data) =>
        setWeahterInfo({
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          pressure: data.main.pressure,
          sunset: data.sys.sunset,
          message: '',
        })
      )
      .catch((e) => {
        setWeahterInfo({
          message: 'Enter correct city name',
        });
      });
  };

  return (
    <div>
      <Form getWeather={getWeather} />
      <Weather info={weatherInfo} />
    </div>
  );
};

export default Data;
