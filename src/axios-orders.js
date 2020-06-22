import axios from "axios";

let instance = axios.create({
  baseURL: "https://burger-builder-applicati-3be98.firebaseio.com/",
});

export default instance;
