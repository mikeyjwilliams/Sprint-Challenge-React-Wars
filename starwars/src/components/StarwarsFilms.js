import React from 'react';
import './StarWars.css';
import Film from './Film';

const StarwarsFilms = props => {
    return (
        <ul className={""}>
            {props.films.map( (film) => {
                return <Film 
                    key={film.created}
                    film={film}
                    />
                }
            )
        }
        </ul>
    );
}
export default StarwarsFilms;