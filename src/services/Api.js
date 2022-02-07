import axios from "axios";

// Create a new axios api and sets baseURL
const axiosAPI = axios.create({
  baseURL: "https://euw1.api.riotgames.com/lol/",
});

// Make an axios API request.
const apiRequest = (method, url, request) => {
  const headers = {
    Authorization: "",
  };

  return axiosAPI({
    method,
    url,
    data: request,
    headers,
  })
    .then((res) => {
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

// Make a GET request.
const get = (url, request) => apiRequest("get", url, request);
// Make a POST request.
const post = (url, request) => apiRequest("post", url, request);

const API = {
  get,
  post,
};
export default API;
