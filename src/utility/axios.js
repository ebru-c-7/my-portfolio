import axios from "axios";

const instance = axios.create({
  baseURL: "https://portfolio-ebru-c-7.firebaseio.com",
});

export default instance;
