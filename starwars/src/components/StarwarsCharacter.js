import React from 'react';
import './StarWars.css';
import StarwarsFilms from './StarwarsFilms';
import StarwarsSpecies from './StarwarsSpecies';
import StarwarsVehicle from './StarwarsVehicles';

const StarwarsCharacter = props => {
    return (
        <div className="display-card">
           <h1>Name: {props.character.name}</h1>
           <ul>
               <li><span className="title">Height:</span> {props.character.height}</li>
               <li>mass: {props.character.mass}</li>
               <li>hair color: {props.character.hair_color}</li>
               <li>skin color: {props.character.skin_color}</li>
               <li>Birth year: {props.character.birth_year}</li>
               <li>Home world: {props.character.homeworld}</li>
               <li>Films: <StarwarsFilms films={props.character.films} /></li>
               <li>Species: <StarwarsSpecies species={props.character.species} /></li>
               <li>vehicles: </li>
               <li>starships: <StarwarsVehicle vehicles={props.character.vehicles} /></li>
               <li>Created: {props.character.created}</li>
               <li>edited: {props.character.edited}</li>
               <li>url: {props.character.url}</li>

           </ul>

        </div>
    );
}
export default StarwarsCharacter;