
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // make sure this is correct
});

export default api;
