import React from 'react';
import { WeatherInfo } from '../units/tytpes';

interface Props {
  info: WeatherInfo;
}

const Weather = ({ info }: Props) => {
  const { message, country, city, pressure, sunset, temp } = info;
  if (message) {
    return (
      <div className="infoWeath">
        <p>{message}</p>
      </div>
    );
  } else {
    return (
      <div className="infoWeath">
        <p>
          Location: {country}, {city}
        </p>
        <p>Temp: {temp}</p>
        <p>Pressure: {pressure}</p>
        <p>Sunset: {sunset}</p>
      </div>
    );
  }
};

export default Weather;
