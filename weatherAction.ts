import {api_key, base_url} from "../utils/constants";
import {Action, Dispatch, ThunkAction, WeatherData} from "../types";

export const PUT_WEATHER = 'PUT_WEATHER';
export const ERROR_WEATHER = 'ERROR_WEATHER';

export const putWeatherAction = (data: WeatherData): Action => {
    return {
        type: PUT_WEATHER,
        payload: {
            city: data.name,
            country: data.sys.country,
            temp: data.main.temp,
            pressure: data.main.pressure,
            sunset: data.sys.sunset
        }
    }
}

export const errorWeatherAction = (): Action => {
    return {
        type: ERROR_WEATHER,
        payload: 'Enter correct city name'
    }
}

export const fetchWeatherAction = (city: string): ThunkAction => {
    return function (dispatch: Dispatch) {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(response => response.json())
            .then(data => dispatch(putWeatherAction(data)))
            .catch(e => {
                dispatch(errorWeatherAction());
            })
    }
}