import React from 'react';

const Wheather = ({info}) => {
    if(info.message){
        return (
            <div className='infoWeath'>
                <p>{info.message}</p>
            </div>
        )
    }else{
        return (
            <div className='infoWeath'>
                <p>Location: {info.country} {info.city}</p>
                <p>Temp: {info.temp}</p>
                <p>Pressure: {info.pressure}</p>
                <p>Sunset: {info.sunset}</p>
            </div>
        );
    }

};

export default Wheather;