import axios from "axios"
import config from "./config"

const instance = axios.create({


  baseURL: `${config.baseURL}/service`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${config.token}`
  }

})

export default instance