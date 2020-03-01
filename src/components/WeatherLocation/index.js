import React from 'react';
import WeatherData from './WeatherData';
import Location from './Location';

const WeatherLocation = () => (
    <div className='weatherLocationCont'>
        <Location city={'Arequipa'}></Location>
        <WeatherData></WeatherData>
    </div>
);

export default WeatherLocation;