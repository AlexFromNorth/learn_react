import axios from "axios";

const apiUrl = `http://localhost:4300/images`;
export const carService = {
  async getAll() {
    const data = await axios.get(apiUrl);

    return data.data
  },
};
