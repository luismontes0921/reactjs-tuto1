import React from 'react'
import WeatherIcons from 'react-weathericons';
import {CLOUD, 
    SUN,
    RAIN} from '../../../constants/weathers';
import PropTypes from 'prop-types';
import './styles.css';

const stateToIconName = (weatherState) => {
    switch (weatherState) {
        case CLOUD:            
            return "cloud";
        case SUN:            
            return "sun";
        case RAIN:
            return "rain";
        default:
            return "day-sleet";
    }
};

const getWeatherIcon = (weatherState) => {
    return (<WeatherIcons className='wicon' name={stateToIconName(weatherState)} size="3x" />);           
};

const WeatherTempeture = ({temperature, weatherState}) => (
    <div className='weatherTemperatureCont'>
        {getWeatherIcon(weatherState)}       
        <span className='temperature'>{`${temperature}`}</span>
        <span className='temperaturetype'>{`°C`}</span>
    </div>
);

WeatherTempeture.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
};
export default WeatherTempeture;