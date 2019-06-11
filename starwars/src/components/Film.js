import React from 'react';
import './StarWars.css';

const Film = props => {
    return (
        <li>{props.film}</li>
    );
}
export default Film;