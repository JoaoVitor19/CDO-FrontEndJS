import axios from "axios"
import config from "./config"


const Instance = axios.create({


    baseURL: `${config.baseURL}/`,
    headers: {
        "Content-Type": 'application/json',
    }


})

module.exports = Instance