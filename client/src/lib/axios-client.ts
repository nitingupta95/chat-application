import axios from "axios";

const API_URL = import.meta.env.MODE === "development" 
  ? "http://localhost:8000/api" 
  : import.meta.env.VITE_API_URL;

export const API = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});
