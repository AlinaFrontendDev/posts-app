import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com/posts",
});

export default axiosInstance;
