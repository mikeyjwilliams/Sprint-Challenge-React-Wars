import React from 'react';
import './StarWars.css';
import StarwarsShip from './StarwarsShip';

const StarwarsStarShips = props => {
    return (
        <ul>
            {props.starships.map( (starship) => {
                return <StarwarsShip
                    key={starship.created + Date.now()}
                    starship={starship}
                    />
                }
            )
        }
        </ul>
    );
}
export default StarwarsStarShips;