import axios from "axios";

const instance = axios.create({
  // baseURL: "http://192.168.1.27:8000",
  baseURL: "https://cookie-shop-test.herokuapp.com",
});

export default instance;
