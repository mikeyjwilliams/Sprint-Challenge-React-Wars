import React from 'react';
import './StarWars.css';
import StarwarsCharacter from './StarwarsCharacter';

const StarwarsCharList = props => {
    return (
        <ul className={"character-display"}>
            {props.starwarsCharacters.map( (character) => {
                return <StarwarsCharacter
                    key={character.created + Date.now()}
                    character={character}
                    characterDisplay={props.characterDisplay}
                    />
                }
            )
        }
        </ul>
    );
}
export default StarwarsCharList;