import axios from "axios";

const axiosIn = axios.create({
  baseURL: "http://localhost:4000",
});

export default axiosIn;
