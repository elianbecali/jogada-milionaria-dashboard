import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept': 'Application/json',
    'Content-Type': 'Application/json'
  }
})