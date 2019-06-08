import React from 'react';
import './StarWars.css';

const StarwarsVehicles = props => {
    return (
        <div className={""}>
            {props.vehicles.map( (vehicle) => {
                return <Vehicle
                    key={vehicle.created}
                    vehicle={vehicle}
                    />
                }
            )
        }
        </div>
    );
}
export default StarwarsVehicles;