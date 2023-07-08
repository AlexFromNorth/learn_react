import React, { useState } from "react";

const CreateCarForm = ({ setAppState }) => {
  // console.log(props.props.setAppState);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const CreateCar = (e) => {
    // {
    //   "id": 0,
    //   "name": "BMW-Z5",
    //   "image": "/BMW-Z5.jpeg",
    //   "price": 50000
    // },
    e.preventDefault();
    // console.log(name);
    // console.log(price);
    // console.log(image);
    setAppState((prev) => ({
      loading: false,
      repos: [
        ...prev.repos,
        {
          id: prev.repos.length,
          name: name,
          image: image,
          price: price,
        },
      ],
    }));
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
        onChange={(e) => setPrice(+e.target.value)}
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
