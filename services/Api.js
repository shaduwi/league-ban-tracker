import axios from "axios";

const axiosAPI = axios.create({
  baseURL: "https://euw1.api.riotgames.com/lol/",
});

const apiRequest = (method, url, request) => {
  const headers = {
    authorization: "",
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

const get = (url, request) => apiRequest("get", url, request);
const post = (url, request) => apiRequest("post", url, request);

const API = {
  get,
  post,
};
export default API;
