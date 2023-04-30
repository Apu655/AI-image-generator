import Axios from "axios";

const API_URL = import.meta.env.SERVER;
export default Axios.create({
  baseURL: API_URL,
});
