import React from 'react';
import './StarWars.css';
import StarwarsFilms from './StarwarsFilms';
import StarwarsSpecies from './StarwarsSpecies';
import StarwarsVehicle from './StarwarsVehicles';
import StarwarsStarships from './StarwarsStarships';

const StarwarsCharacter = props => {
    return (
        <div className="display-card">
           <h1>Name: {props.character.name}</h1>
           <ul>
               <li>
                   <span className="title">Height:</span>
                    {props.character.height}
                </li>
               <li>
                   <span className="title">mass:</span> 
                   {props.character.mass}
                </li>
           </ul>

        </div>
    );
}
export default StarwarsCharacter;