import React, { useState } from "react";

const CreateCarForm = ({ setAppState }) => {
  const [data, setData] = useState({ name: "", image: "", price: "" });
  console.log(data)

  const CreateCar = (e) => {
    e.preventDefault();

    setAppState((prev) => ({
      loading: false,
      repos: [
        {
          id: prev.repos.length,
          ...data,
        },
        ...prev.repos,
      ],
    }));
    setData({name: '',image: '', price: ''})
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))}
        value={data.name}
      />
      <input
        type="text"
        placeholder="Price"
        onChange={(e) => setData((prev) => ({ ...prev, price: +e.target.value }))}
        value={data.price}
      />
      <input
        type="text"
        placeholder="Image"
        onChange={(e) => setData((prev) => ({ ...prev, image: e.target.value }))}
        value={data.image}
      />

      <button onClick={CreateCar}>Create</button>
    </form>
  );
};

export default CreateCarForm;
