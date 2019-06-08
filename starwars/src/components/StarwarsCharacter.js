import React from 'react';
import './StarWars.css';
import StarwarsFilms from './StarwarsFilms';

const StarwarsCharacter = props => {
    return (
        <div className="test">
           <h1>Name: {props.character.name}</h1>
           <ul>
               <li>height: {props.character.height}</li>
               <li>mass: {props.character.mass}</li>
               <li>hair color: {props.character.hair_color}</li>
               <li>skin color: {props.character.skin_color}</li>
               <li>Birth year: {props.character.birth_year}</li>
               <li>Home world: {props.character.homeworld}</li>
               <li>Films: <StarwarsFilms films={props.character.films} /></li>
           </ul>

        </div>
    );
}
export default StarwarsCharacter;