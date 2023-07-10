import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { carService } from "../../../services/car.service";
import ListItem from "../home/listItem/ListItem";
import { AuthContext } from "../../../providers/AuthProvider";
import { withAuth } from "../../../HOC/withAuth";

const CarDetail = () => {
  const {id} = useParams()
  const [car, setCar] = useState({})
  useEffect(() => {
    if (!id) return
    const axiosData = async () => {
      const data = await carService.getById(id)
          setCar( data );
    };
    axiosData()
  }, [id]);

  if(!car.name) return <p>Loading...</p>



  return <div>
    CarDetail {id}
    <Link to='/'>Back</Link>
    <ListItem car={car}/>
  </div>;
};

export default withAuth(CarDetail);
