import React from 'react';
import {connect} from "react-redux";
import {State} from "../types";

interface PropsType{
    weather: {sunset: number; [key: string]: string | number};
    message: string | null;
}

const Weather = ({weather, message}: PropsType) => {

    return (
        <div className='infoWeath'>
            {!message &&
            <div>
                <p>Location: {weather.country}, {weather.city}</p>
                <p>Temp: {weather.temp}</p>
                <p>Pressure: {weather.pressure}</p>
                <p>Sunset: {new Date(weather.sunset * 1000).toTimeString()}</p>
            </div>
            }
            <p>{message}</p>
        </div>
    );

};

const mapStateToProps = (state: State) => (
    {
        weather: state.weatherInfo,
        message: state.message
    }
)

//@ts-ignore
export default connect(mapStateToProps)(Weather);

