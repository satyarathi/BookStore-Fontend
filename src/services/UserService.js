import axios from "axios";

const url = "http://localhost:6060/api/v1/";

export const registerUser = async (obj) => {
  let response = await axios.post(url + "users/", obj);
  console.log(response);
  return response;
};
export const loginUser = async (obj) => {
  let response = await axios.post(url + "users/login", obj);
  console.log(response);
  return response;
};
