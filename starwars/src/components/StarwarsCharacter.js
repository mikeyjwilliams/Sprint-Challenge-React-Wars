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
               <li>
                   <span className="title">hair color:</span> 
                   {props.character.hair_color}
                </li>
               <li>
                   <span className="title">skin color:</span>
                    {props.character.skin_color}
                </li>
               <li>
                   <span className="title">Birth year:</span> 
                   {props.character.birth_year}
                </li>
               <li>
                   <span className="title">Home world:</span>
                    {props.character.homeworld}
                </li>
               <li>
                   <span className="title">Films:</span>
                    <StarwarsFilms films={props.character.films} />
                </li>
               <li>
                   <span className="title">Species:</span>
                    <StarwarsSpecies species={props.character.species} />
                </li>
               <li>
                   <span className="title">vehicles:</span>
                    <StarwarsVehicle vehicles={props.character.vehicles} />
                </li>
               <li>starships:
                   <StarwarsStarships starships={props.character.starships} />
                </li>
               <li><span className="title">Created:</span> 
                   {props.character.created}
                </li>
               <li><span className="title">edited:</span>
                   {props.character.edited}
                </li>
               <li><span className="title">url:</span> 
                   {props.character.url}
               </li>

           </ul>

        </div>
    );
}
export default StarwarsCharacter;