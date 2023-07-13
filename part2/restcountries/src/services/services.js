import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";

export const getAll = () => {
  return axios.get(baseUrl);
};

export const getWeatherInfo = (capital) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${capital}&APPID=${
      import.meta.env.VITE_API_KEY
    }`
  );
};

// export const create = (newObject) => {
//   return axios.post(baseUrl, newObject);
// };

// export const update = (id, newObject) => {
//   return axios.put(`${baseUrl}/${id}`, newObject);
// };

// export const eliminate = (id) => {
//   return axios.delete(`${baseUrl}/${id}`);
// };
