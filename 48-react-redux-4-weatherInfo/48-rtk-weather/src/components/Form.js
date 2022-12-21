import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../actionFunctions/fetchWeather';

const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(fetchWeather(city));
        setCity('');
    }

    const handleChange = e => {
        setCity(e.target.value);
    }

    return (
        <div>
            <input
                onChange={handleChange}
                type='text'
                placeholder='City'
                value={city}
            />
            <button onClick={handleClick}>Get weather</button>
        </div>
    )

}

export default Form