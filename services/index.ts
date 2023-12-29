export const getPilpres = () => {
  return fetch("https://api.npoint.io/42afb3873a8951e88d56")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Handle the response data here
      console.log(data);
      return data;
    })
    .catch((error) => {
      // Handle any errors here
      console.error(error);
      throw error;
    });
};

export const getPilpresByIndex = (index: number) => {
  return fetch(`https://api.npoint.io/42afb3873a8951e88d56/${index}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Handle the response data here
      console.log(data);
      return data;
    })
    .catch((error) => {
      // Handle any errors here
      console.error(error);
      throw error;
    });
};
