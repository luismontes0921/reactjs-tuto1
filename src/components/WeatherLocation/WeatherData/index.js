import React from 'react';
import WeatherTempeture from './WeatherTempeture';
import WeatherExtraInfo from './WeatherExtraInfo';
import {CLOUD, 
    SUN,
    RAIN} from '../../../constants/weathers';

import './styles.css';

const WeatherData = () => (
    <div className='weatherDataCont'>        
        <WeatherTempeture temperature={10} weatherState={RAIN}></WeatherTempeture>
        <WeatherExtraInfo huminity={30} wind={'10m/s'}></WeatherExtraInfo>
    </div>
);

export default WeatherData;