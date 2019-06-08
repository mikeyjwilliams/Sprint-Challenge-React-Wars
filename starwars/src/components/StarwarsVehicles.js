import React from 'react';

import Vehicle from './Vehicle';
import './StarWars.css';


const StarwarsVehicles = props => {
    return (
        <ul className={""}>
            {props.vehicles.map( (vehicles) => {
                return <Vehicle
                    key={vehicles.created + Date.now()}
                    vehicles={vehicles}
                    />
                }
            )
        }
        </ul>
    );
}
export default StarwarsVehicles;