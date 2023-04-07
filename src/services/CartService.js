import axios from "axios";

const url = "http://localhost:6060/api/v1/";

const headerConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

export const addedToCart = (id) => {
  return axios.post(url + `cart/add/${id}`, headerConfig);
};

export const removeFromCart = (id) => {
  return axios.post(url + `cart/remove/${id}`, headerConfig);
};
