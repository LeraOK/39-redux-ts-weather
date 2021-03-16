import React from 'react';
import {useSelector} from "react-redux";
import {State} from "../types";

const Weather = () => {
    const weather = useSelector((state: State) => state.weatherInfo!);
    const message = useSelector((state: State) => state.message);

    return (
        <div className='infoWeath'>
            {!message &&
            <div>
                <p>Location: {weather.country}, {weather.city}</p>
                <p>Temp: {weather.temp}</p>
                <p>Pressure: {weather.pressure}</p>
                <p>Sunset: {new Date(+weather.sunset * 1000).toTimeString()}</p>
            </div>
            }
            <p>{message}</p>
        </div>
    );

};

export default Weather;

