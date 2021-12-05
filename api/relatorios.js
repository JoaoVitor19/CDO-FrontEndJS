import axios from "axios"
import config from "./config"

const instance = axios.create({

  baseURL: "http://192.168.100.5:8080/service",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${config.token}`
  }

})

export default instance