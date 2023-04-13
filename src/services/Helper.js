import axios from "axios";
import { getToken } from "../authorization/auth";

export const BASE_URL = "http://localhost:5000/api";

export const myAxios = axios.create({
  baseURL: BASE_URL,
});

export const privateAxios = axios.create({
  baseURL: BASE_URL,
});

privateAxios.interceptors.request.use(
  (config) => {
    const authtoken = getToken();
    if (authtoken) {
      config.headers.Authorization = authtoken;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
