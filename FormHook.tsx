import React, {useState} from 'react';
import {fetchWeatherAction} from "../actions/weatherAction";
import {useDispatch} from "react-redux";

const Form = () => {
    const [city, setCity] = useState<string>('');
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(fetchWeatherAction(city.trim()));
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

export default Form;