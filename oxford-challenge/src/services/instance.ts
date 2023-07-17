import axios from "axios";

// I would normally create an instance like this but it does not work with this spefic url "https://picsum.photos/"

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
});

export default instance;
