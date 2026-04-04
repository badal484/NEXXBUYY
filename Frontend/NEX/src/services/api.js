import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.0.226:4448/api",
});

export default API;