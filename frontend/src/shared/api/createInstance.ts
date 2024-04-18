import axios from "axios";

export const createInstance = () =>
  axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
  });
