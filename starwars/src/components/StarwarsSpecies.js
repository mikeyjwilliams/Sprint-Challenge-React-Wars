import React from 'react';
import './StarWars.css';
import Species from './Species';

const StarwarsSpecies = props => {
    return (
        <ul className={"character-display"}>
            {props.species.map( (species) => {
                return <Species
                    key={species.created + Date.now()}
                    species={species}
                    />
                }
            )
        }
        </ul>
    );
}
export default StarwarsSpecies;