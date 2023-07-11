import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { carService } from "../../../services/car.service";
import ListItem from "../home/listItem/ListItem";
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



  useEffect(() => {
    if (!id) return
    const axiosData = async () => {
      const data = await carService.getById(id)
          setCar( data );
    };
    axiosData()
  }, [id]);

  useEffect(() => {
    if (!id) return
    const axiosData = async () => {
      const data = await carService.delete(0)
          console.log(data)
    };
    axiosData()
  }, [id]);

  if(!car.name) return <p>Loading...</p>



  return <div className="car_detail">
    <h3>CarDetail id:{id}</h3>
    <Link to='/'>Back</Link>
    <ListItem car={car}/>
  </div>;
};

export default withAuth(CarDetail);
