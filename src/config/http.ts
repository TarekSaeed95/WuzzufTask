import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URLz,
  timeout: 600000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
  },
});

export const http = {
  get: (url: string) =>
    instance.get(url).then((response) => {
      return response.data;
    }),
};
