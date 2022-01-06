import axios from "axios";
import queryString from "query-string";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (prams) => queryString.stringify(prams),
});

api.interceptors.response.use(
  (res) => (res && res.data ? res.data : res),
  (err) => console.error(err)
);

export default api;
