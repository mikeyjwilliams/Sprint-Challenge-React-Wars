import React from 'react';
import './StarWars.css';
import StarwarsCharacter from './StarwarsCharacter';

const StarwarsCharList = props => {
    return (
        <div className={"character-display"}>
            {props.starwarsCharacters.map( (character) => {
                return <StarwarsCharacter
                    key={character.created}
                    character={character}
                    characterDisplay={props.characterDisplay}
                    />
                }
            )
        }
        </div>
    );
}
export default StarwarsCharList;