import React, { useState } from "react";

const CreateCarForm = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

  const CreateCar = (e) => {
    e.preventDefault()
    console.log(name)
    console.log(price)
    console.log(image)
  } 

  return <form>
    <input type="text" placeholder="Name" onChange={e=>setName(e.target.value)} value={name}/>
    <input type="text" placeholder="Price" onChange={e=>setPrice(e.target.value)} value={price}/>
    <input type="text" placeholder="Image" onChange={e=>setImage(e.target.value)} value={image}/>

    <button onClick={CreateCar}>Create</button>
  </form>;
};

export default CreateCarForm;
