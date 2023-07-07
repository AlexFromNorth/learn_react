import React, { useState } from "react";

const CreateCarForm = ({setAppState}) => {
  // console.log(props.props.setAppState);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const CreateCar = (e) => {
    e.preventDefault();
    // console.log(name);
    // console.log(price);
    // console.log(image);
    // setAppState(prev=> console.log(prev))
    setAppState({repos: [
      {
        "id": 0,
        "name": "BMW-Z5",
        "image": "/BMW-Z5.jpeg",
        "price": 50000
      },
      {
        "id": 0,
        "name": "BMW-Z5",
        "image": "/BMW-Z5.jpeg",
        "price": 50000
      },
      {
        "id": 0,
        "name": "BMW-Z5",
        "image": "/BMW-Z5.jpeg",
        "price": 50000
      },
      {
        "id": 1,
        "name": "BMW-Z1",
        "image": "/BMW-Z1.jpeg",
        "price": 24639
      }
    ]});
    // setAppState(prev=> console.log(prev))
      };

  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="text"
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <input
        type="text"
        placeholder="Image"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />

      <button onClick={CreateCar}>Create</button>
    </form>
  );
};

export default CreateCarForm;
