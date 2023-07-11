import React from 'react'
import { Link } from 'react-router-dom';
import Price from './Price';

const Listitem = ({car}) => {
    return (
        <li key={car.id} className="list">
          {/* <p className="car-text">{car.id} </p> */}
          <p className="car-name">{car.name}</p>
          <img src={car.image} alt="Car" width={300} />
          <Price price={car.price} />
          <Link to={`/car/${car.id}`}>Read more</Link>
          
        </li>
      );
}

export default Listitem