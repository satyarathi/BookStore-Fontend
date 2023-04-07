import axios from "axios";

const url = "http://localhost:6060/api/v1/";

const headerConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

export const getAllBooks = () => {
  return axios.get(url + "books/", headerConfig);
};

export const getById = (id) => {
  return axios.get(url + `books/${id}`, headerConfig);
};
