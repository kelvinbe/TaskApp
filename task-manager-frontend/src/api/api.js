import axios from "axios";

const API = axios.create({
  baseURL: "https://taskapp-3.onrender.com/",
});

export default API;