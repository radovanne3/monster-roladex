import axios from "axios";

const API_URL = axios.create({baseURL:'https://jsonplaceholder.typicode.com'})

export default API_URL