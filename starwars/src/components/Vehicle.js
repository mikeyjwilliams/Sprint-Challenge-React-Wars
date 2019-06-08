import React from 'react';
import './StarWars.css';

const Vehicle = props => {
    return (
        <li>
            {props.vehicles}
        </li>
    );
}
export default Vehicle;