import {ERROR_WEATHER, PUT_WEATHER} from "../actions/weatherAction";
import {Action, State} from "../types";

const initialState = {
    message: "Enter city name",
    weatherInfo: {
        city: '',
        country: '',
        temp: '',
        pressure: '',
        sunset: ''
    }
}

export const weatherReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case PUT_WEATHER:
            return {...state, weatherInfo: action.payload, message: null};
        case ERROR_WEATHER:
            return {...state, message: action.payload, weatherInfo: null}
        default:
            return state;
    }
}