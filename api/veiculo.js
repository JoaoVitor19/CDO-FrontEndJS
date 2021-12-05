import axios from "axios"
import config from "./config"

const instance = axios.create({
    baseURL: `http://192.168.0.104:8080/veiculo`,
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${config.token}` }
})

export default instance