import React from 'react';
import Form from "./Form";
import Wheather from "./Wheather";
import {api_key, base_url} from "../units/contstants";

class Date extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            weatherInfo: {
                temp: null,
                city: null,
                country: null,
                pressure: null,
                sunset: null,
                message: `Enter city`
            }
        }
    }

    getWeather = city => {
        fetch(`${base_url}?q=${city}&appid=${api_key}`)
            .then(respons => respons.json())
            .then(data => this.setState({
                weatherInfo: {
                    temp: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    pressure: data.main.pressure,
                    sunset: data.sys.sunset,
                    message: ''

                }
            }))
            .catch(date => {
              this.setState({
                  weatherInfo: {
                      message: 'Enter correct city name',
                  }
              })
            })
    }


    render() {
        return (
            <div>
                <Form getWeather={this.getWeather}/>
                <Wheather info={this.state.weatherInfo}/>
            </div>
        );
    }
}

export default Date;