import axios from "axios"
import config from "./config"

const instance = axios.create({

  //  baseURL: `${config.baseURL}/abasteci`,
    baseURL: "http://192.168.100.5:8080/abasteci",
    headers: {"Content-Type": "application/json", Authorization:`Bearer ${config.token}`} 

})

export default instance