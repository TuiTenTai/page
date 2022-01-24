import axios from 'axios';
import queryString from 'query-string';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (prams: Record<string, any>) => queryString.stringify(prams),
});

export default client;
