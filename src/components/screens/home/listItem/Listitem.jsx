import React from 'react'
import { Link } from 'react-router-dom';

const Listitem = ({car}) => {
    return (
        <li key={car.id} className="list">
          {/* <p className="car-text">{car.id} </p> */}
          <p className="car-description">{car.name}</p>
          <img src={car.image} alt="Car" width={300} />
          <p className="car-description">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(car.price)}
          </p>
          <Link to={`/car/${car.id}`}>Read more</Link>
        </li>
      );
}

export default Listitem