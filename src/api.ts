import axios from "axios";

//const token = localStorage.getItem("token");

const api = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Acess-Control-Allo-Origin": "*",
    "Content-Type": "aplication/json",
    //"Authorization": token
  }
})

export default api;