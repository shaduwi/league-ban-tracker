import axios from "axios";

// Create a new axios api and sets baseURL
const summonerAPI = axios.create({
  baseURL: "https://euw1.api.riotgames.com/lol/",
});
const matchAPI = axios.create({
  baseURL: "https://europe.api.riotgames.com/lol/",
});

// Make an axios API request.
const apiRequest = (api, method, url, request) => {
  return api({
    method,
    url,
    data: request,
  })
    .then((res) => {
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

// Make a GET request.
const getSummoner = (url, request) =>
  apiRequest(summonerAPI, "get", url, request);
const getMatch = (url, request) => apiRequest(matchAPI, "get", url, request);

const API = {
  getSummoner,
  getMatch,
};
export default API;
