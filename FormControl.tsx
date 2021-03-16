import React, {useState} from 'react';
import {bindActionCreators} from "redux";
import {fetchWeatherAction} from "../actions/weatherAction";
import {connect} from "react-redux";
import {Dispatch} from "../types";

interface PropsType{
    getWeather: (city: string) => void
}

const FormControl = ({getWeather}: PropsType) => {
    const [city, setCity] = useState<string>('');

    const handleClick = () => {
        getWeather(city.trim());
        setCity('');
    }

    return (
        <div>
            <input
                value={city}
                onChange={e => setCity(e.target.value)}
                type='text'
                name='city'
                placeholder='City'/>
            <button onClick={handleClick}>Get weather</button>
        </div>
    );

}

const mapDispatchToProps = (dispatch: Dispatch) => {
    // return {
    //     getWeather: city => dispatch(fetchWeatherAction(city))
    // }

    //@ts-ignore
    return bindActionCreators({getWeather: fetchWeatherAction}, dispatch);
}

//@ts-ignore
export default connect(null, mapDispatchToProps)(FormControl);