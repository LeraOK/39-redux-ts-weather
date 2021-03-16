import React from 'react';
import Form from "../containers/FormHook";
import Weather from "../containers/WeatherHook";

const Data: React.FC = (): JSX.Element => {

    return (
        <div>
            <Form/>
            <Weather/>
        </div>
    );
}

export default Data;