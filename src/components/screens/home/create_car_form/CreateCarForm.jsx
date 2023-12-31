import React from "react";
import { useForm } from "react-hook-form";

const CreateCarForm = ({ setAppState }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const CreateCar = (data) => {
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
    reset();
  };
  return (
    <form onSubmit={handleSubmit(CreateCar)}>
      <input
        type="text"
        {...register("name", { required: "Name is required!" })}
        placeholder="Name"
      />
      {errors?.name?.message && <p>{errors?.name?.message}</p>}
      <input
        type="text"
        {...register("price", { required: "Price is required!" })}
        placeholder="Price"
      />
      {errors?.price?.message && <p>{errors?.price?.message}</p>}
      <input
        type="text"
        {...register("image", { required: "Image is required!" })}
        placeholder="Image"
      />
      {errors?.image?.message && <p>{errors?.image?.message}</p>}

      <button>Create</button>
    </form>
  );
};

export default CreateCarForm;
