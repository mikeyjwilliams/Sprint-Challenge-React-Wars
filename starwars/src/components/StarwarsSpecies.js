import React from 'react';
import './StarWars.css';
import Species from './Species';

const StarwarsSpecies = props => {
    return (
        <div className={"character-display"}>
            {props.species.map( (species) => {
                return <Species
                    key={species.created}
                    species={species}
                    />
                }
            )
        }
        </div>
    );
}
export default StarwarsSpecies;