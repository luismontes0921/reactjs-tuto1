import React from 'react';
import PropTypes from 'prop-types';

import './styles.css'

//const Location = (props) => {
const Location = ({ city }) => {    
    //const city = props.city;
    //const {city} = props; //destructuring

    //console.log(props);
    return (
    <div className='locationCont'>
        <h1>
            {city}
        </h1>
    </div>);
};

Location.propTypes = {
    city: PropTypes.string.isRequired,
};

export default Location;