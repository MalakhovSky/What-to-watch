import axios from "axios";

export const API_URL = 'https://6.react.htmlacademy.pro/wtw'


const  $api = axios.create({
  withCredentials: true,
  baseURL:API_URL
})
export default $api;
