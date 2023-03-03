import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";

const customFetch = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

// it checks if we need to add headers, and add it automatically
customFetch.interceptors.request.use(
  (config) => {
    const user = getUserFromLocalStorage();
    if (user) config.headers["Authorization"] = `Bearer ${user.token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default customFetch;
