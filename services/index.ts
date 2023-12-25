import axios from "axios";

export const getPilpres = () => {
  return axios
    .get("https://api.npoint.io/42afb3873a8951e88d56")
    .then((response) => {
      // Handle the response data here
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      // Handle any errors here
      console.error(error);
      throw error;
    });
};

export const getPilpresByIndex = (index: number) => {
  return axios
    .get(`https://api.npoint.io/42afb3873a8951e88d56/${index}`)
    .then((response) => {
      // Handle the response data here
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      // Handle any errors here
      console.error(error);
      throw error;
    });
};
